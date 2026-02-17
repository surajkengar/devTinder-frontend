# 🚀 DevTinder

DevTinder is a full-stack web application inspired by modern networking platforms, where users can connect, send requests, and build professional relationships.

Built using the IMERN stack (MongoDB, Express, React, Node.js), the application includes secure authentication, protected routes, and real-time connection logic.

---

## 🧠 Overview

DevTinder allows users to:

- Register and login securely
- Create and manage profiles
- Send connection requests
- Accept or reject requests
- View connections
- Maintain a personalized dashboard

This project demonstrates real-world backend architecture, authentication systems, and full-stack integration.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT (Authentication)
- Bcrypt (Password Hashing)
- Cookie Parser
- CORS

### Database
- MongoDB (Atlas)

### Deployment
- Frontend: Vercel / Netlify
- Backend: Render / Railway
- Database: MongoDB Atlas

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Secure Login using JWT
- Password hashing with Bcrypt
- Protected API routes
- HTTP-only cookies (if implemented)

### 👤 User System
- Create Profile
- Update Profile
- View Other Users
- Personalized Dashboard

### 🤝 Connection System
- Send Connection Requests
- Accept / Reject Requests
- View Connections
- Prevent Duplicate Requests

### ⚙️ Backend Architecture
- RESTful APIs
- Middleware-based authentication
- Proper error handling
- Environment-based configuration
- CORS handling for production

---

## ⚙️ Installation & Setup

1️⃣ Clone Repository  
git clone https://github.com/surajkengar/devTinder-frontend
cd devtinder  

---

2️⃣ Navigate to Backend Folder  
cd backend  

---

3️⃣ Install Dependencies  
npm install 

---

4️⃣ Create .env File inside backend folder and add:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
CLIENT_URL=http://localhost:3000  

---

5️⃣ Start Backend Server  
npm run dev  

---

6️⃣ Navigate to Frontend Folder  
cd ../frontend 

---

7️⃣ Install Dependencies  
npm install 

---

8️⃣ Start Frontend  
npm start  

---

Backend runs on: http://localhost:5000  
Frontend runs on: http://localhost:3000  

---

## 🌍 Live Demo

Frontend: https://dev-tinder-frontend-taupe-tau.vercel.app
Backend API: https://devtinder-backend-z3i4.onrender.com

---

## 📈 Learning Outcomes

- Designing authentication systems
- Handling JWT & cookies securely
- Managing MongoDB relationships
- Debugging CORS and deployment issues
- Structuring scalable backend architecture

---

## 👨‍💻 Author

Suraj Kengar  
Full Stack Developer (IMERN Stack)

---

## 🔮 Future Improvements

- Real-time chat feature
- Profile search & filtering
- Notifications system
- Role-based access control
- UI/UX enhancements
