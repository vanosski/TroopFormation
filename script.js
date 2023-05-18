function calculateFormation() {
      var name = document.getElementById("name").value;
      var troopTypes = parseInt(document.getElementById("troopTypes").value);
      var totalTroops = parseFloat(document.getElementById("totalTroops").value);
      var numGuards = parseFloat(document.getElementById("numGuards").value);

      var types = [];
      var dead = [];
      var wounded = [];
      var survived = [];
      var kills = [];

      for (var i = 0; i < troopTypes; i++) {
        types.push(document.getElementById("troopType_" + i).value);
        dead.push(parseFloat(document.getElementById("dead_" + i).value) || 0.1);
        wounded.push(parseFloat(document.getElementById("wounded_" + i).value) || 0.1);
        survived.push(parseFloat(document.getElementById("survived_" + i).value) || 0.1);
        kills.push(parseFloat(document.getElementById("kills_" + i).value) || 0.1);
      }

      var dw = [];
      var total = [];
      var coef = [];
      var mot = [];
      var res = [];

      for (var i = 0; i < troopTypes; i++) {
        dw[i] = dead[i] + wounded[i];
        total[i] = dw[i] + survived[i];
        coef[i] = 1 / (((kills[i] - dw[i]) / Math.sqrt(total[i])) * ((kills[i] - dw[i]) / Math.sqrt(total[i])));

        mot[i] = [];
        for (var j = 0; j < troopTypes + 1; j++) {
          if (i === 0 && j < troopTypes)
            mot[i][j] = 1;
          else if (i === 0 && j === troopTypes)
            mot[0][troopTypes] = totalTroops - numGuards;
          else if (i >= 1 && i < troopTypes && j === 0)
            mot[i][0] = coef[0];
          else
            mot[i][j] = 0;
        }
      }

      for (var i = 1; i < troopTypes; i++) {
        mot[i][i] = -1 * coef[i];
      }

      for (var i = 0; i < troopTypes - 1; i++) {
        for (var j = i + 1; j < troopTypes; j++) {
          if (Math.abs(mot[i][i]) < Math.abs(mot[j][i])) {
            for (var k = 0; k < troopTypes + 1; k++) {
              mot[i][k] = mot[i][k] + mot[j][k];
              mot[j][k] = mot[i][k] - mot[j][k];
              mot[i][k] = mot[i][k] - mot[j][k];
            }
          }
        }
      }

      for (var i = 0; i < troopTypes - 1; i++) {
        for (var j = i + 1; j < troopTypes; j++) {
          var f = mot[j][i] / mot[i][i];
          for (var k = 0; k < troopTypes + 1; k++) {
            mot[j][k] = mot[j][k] - f * mot[i][k];
          }
        }
      }

      for (var i = troopTypes - 1; i >= 0; i--) {
        res[i] = mot[i][troopTypes];
        for (var j = i + 1; j < troopTypes; j++) {
          if (i !== j) {
            res[i] = res[i] - mot[i][j] * res[j];
          }
        }
        res[i] = res[i] / mot[i][i];
      }

      var result = "<h2>Formation for " + name + "</h2>";
      result += "<p>For " + numGuards + " guards and " + totalTroops + " troops:</p>";
      for (var i = 0; i < troopTypes; i++) {
        result += "<p>" + types[i] + " : " + Math.floor(res[i]) + "</p>";
      }

      document.getElementById("result").innerHTML = result;

      // Scroll to the result
      document.getElementById("result").scrollIntoView({ behavior: "smooth" });
    }

    function addTroopTypeInputs() {
      var troopTypes = parseInt(document.getElementById("troopTypes").value);
      var troopTypeInputs = document.getElementById("troopTypeInputs");

      while (troopTypeInputs.firstChild) {
        troopTypeInputs.removeChild(troopTypeInputs.firstChild);
      }

      for (var i = 0; i < troopTypes; i++) {
        var div = document.createElement("div");

        var label = document.createElement("label");
        label.innerHTML = "Enter name of Troop Type / Player " + (i + 1) + ":";
        div.appendChild(label);

        var input = document.createElement("input");
        input.type = "text";
        input.id = "troopType_" + i;
        input.required = true;
        div.appendChild(input);

        var deadLabel = document.createElement("label");
        deadLabel.innerHTML = "Dead:";
        div.appendChild(deadLabel);

        var deadInput = document.createElement("input");
        deadInput.type = "number";
        deadInput.id = "dead_" + i;
        div.appendChild(deadInput);

        var woundedLabel = document.createElement("label");
        woundedLabel.innerHTML = "Wounded:";
        div.appendChild(woundedLabel);

        var woundedInput = document.createElement("input");
        woundedInput.type = "number";
        woundedInput.id = "wounded_" + i;
        div.appendChild(woundedInput);

        var survivedLabel = document.createElement("label");
        survivedLabel.innerHTML = "Survived:";
        div.appendChild(survivedLabel);

        var survivedInput = document.createElement("input");
        survivedInput.type = "number";
        survivedInput.id = "survived_" + i;
        div.appendChild(survivedInput);

        var killsLabel = document.createElement("label");
        killsLabel.innerHTML = "Kills:";
        div.appendChild(killsLabel);

        var killsInput = document.createElement("input");
        killsInput.type = "number";
        killsInput.id = "kills_" + i;
        div.appendChild(killsInput);

        troopTypeInputs.appendChild(div);
      }
    }

    document.getElementById("troopTypes").addEventListener("change", addTroopTypeInputs);