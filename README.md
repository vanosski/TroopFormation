---

# **TroopFormation**

TroopFormation is a full-stack MERN application that allows users to calculate and store optimal troop formations for strategic gameplay. It provides seamless authentication and a formation calculation system to enhance battle strategies.  

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

---

## **Features**
- **User Authentication**: Secure login and registration system.
- **Troop Formation Calculator**: Perform troop formation calculations server-side.
- **Result Storage**: Save and retrieve troop formation results.
- **React Frontend**: User-friendly and responsive interface.
- **RESTful API**: Organized backend logic with Express routes for handling formations and users.

---

## **Tech Stack**
- **Frontend**: React, HTML5, CSS3  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Version Control**: Git, GitHub  
- **Development Tools**: Visual Studio Code, Nodemon

---

## **Directory Structure**
```
troopformation
│
├── backend
│   ├── controllers
│   │   ├── authController.js
│   │   └── formationController.js
│   ├── library
│   │   └── helper.js
│   ├── middleware
│   │   └── middleware.js
│   ├── models
│   │   ├── formationmodel.js
│   │   └── usermodel.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── formationRoutes.js
│   ├── database.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── components
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Registers.js
│   │   │   └── TroopFormationForm.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   ├── index.js
│   │   └── setupTests.js
│   ├── package.json
│   └── README.md
│
└── node_modules
```

---

## **Installation**
### Prerequisites
- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection

### **Backend Setup**
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your **MongoDB URI** in `database.js`.
4. Start the backend server:
   ```bash
   nodemon index.js
   ```

### **Frontend Setup**
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

---

## **Usage**
1. **User Registration and Login**: 
   - Register a new user or log in with existing credentials.
2. **Troop Formation Calculation**: 
   - After logging in, navigate to `/TroopFormationForm` to perform calculations.
3. **Save and Retrieve Results**: 
   - Save formation results to the database and view them later.

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
- Implement **Axios** for API calls from the frontend.
- Add **JWT Authentication** for session management.
- Integrate **MongoDB Atlas** for cloud database management.
- Add **delete functionality** for saved results.

---

## **Contact**
If you have any questions or feedback, feel free to reach out:  
- **GitHub**: [vanosski](https://github.com/vanosski)  
- **LinkedIn**: [Vanssh Parikh](https://linkedin.com/in/vanssh-parikh-765a2a156)

---
