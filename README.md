# **TroopFormation**

TroopFormation is a **full-stack MERN application** that helps users calculate and store optimal troop formations for strategic gameplay. It offers a user-friendly interface with seamless authentication, server-side calculation logic, and result storage for efficient strategy planning.  

---

## **Live Demo and Repositories**  
- **Live Demo**: [TroopFormation App](https://calm-gelato-42a5ea.netlify.app/)  
- **Frontend Repository**: [TroopFormation Frontend](https://github.com/vanosski/troopformation-frontend)  
- **Backend Repository**: [TroopFormation Backend](https://github.com/vanosski/troopformation-backend)  

---

## **Table of Contents**  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup](#setup)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Future Improvements](#future-improvements)  
- [Contact](#contact)  

---

## **Features**  
- **User Authentication**: Register and login using secure authentication logic.  
- **Troop Formation Calculator**: Perform strategic troop formation calculations server-side.  
- **Result Storage**: Save and retrieve troop formation results from the database.  
- **Interactive Frontend**: A smooth and responsive React-based UI.  
- **RESTful APIs**: Structured Express routes for handling authentication and formation logic.  

---

## **Tech Stack**  
- **Frontend**: React, HTML5, CSS3  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Version Control**: Git, GitHub  
- **Deployment**: Vercel (Frontend), Render (Backend)  
- **Development Tools**: Visual Studio Code, Nodemon  

---

## **Setup**  
### Prerequisites  
- **Node.js** installed  
- **MongoDB** running locally or a MongoDB Atlas connection  

### Backend Setup  
1. Clone the backend repository:  
   ```bash  
   git clone https://github.com/vanosski/troopformation-backend.git  
   cd troopformation-backend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Configure the MongoDB URI in `database.js`.  
4. Start the backend server:  
   ```bash  
   npm start  
   ```  
   Backend will run at [https://troopformation-backend.onrender.com](https://troopformation-backend.onrender.com).  

### Frontend Setup  
1. Clone the frontend repository:  
   ```bash  
   git clone https://github.com/vanosski/troopformation-frontend.git  
   cd troopformation-frontend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Start the frontend:  
   ```bash  
   npm start  
   ```  
   Frontend will be available at [http://localhost:3000](http://localhost:3000).  

---

## **Usage**  
1. **Register or Log in**: Use the authentication flow to create an account or log in.  
2. **Perform Calculations**: Navigate to `/TroopFormationForm` after login and enter your troop data.  
3. **Save and View Results**: Store calculated results and retrieve them from the database for future reference.  

---

## **API Endpoints**  
### **Authentication Routes**  
- **POST** `/api/auth/register`: Register a new user  
- **POST** `/api/auth/login`: Log in an existing user  

### **Formation Routes**  
- **POST** `/api/formation/calculate`: Perform troop formation calculations  
- **GET** `/api/formation/results`: Retrieve saved formation results  

---

## **Future Improvements**  
- Add **JWT Authentication** for session management.  
- Integrate **MongoDB Atlas** for cloud database management.  
- Implement **Axios** for API calls.  
- Add **delete functionality** for saved formations.  

---

## **Contact**  
For questions or feedback, feel free to reach out:  
- **GitHub**: [vanosski](https://github.com/vanosski)  
- **LinkedIn**: [Vanssh Parikh](https://linkedin.com/in/vanssh-parikh-765a2a156)  

---
