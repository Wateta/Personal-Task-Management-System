# Personal-Task-Management-System
# Personal Task Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) 
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) 
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) 

A **Node.js backend project using Express.js and MongoDB** for managing personal tasks. This system allows users to **create, read, update, and delete tasks** while associating each task with a registered user. It is designed to help developers **learn backend development, RESTful API design, and MongoDB integration** in a practical, real-world style.

---

## 🚀 Features

- Full CRUD operations for tasks:
  - **Create** tasks  
  - **Read** all tasks or a single task  
  - **Update** tasks  
  - **Delete** tasks  
- Tasks are linked to registered users  
- Input validation using **Joi**  
- Proper **HTTP status codes** and error handling  
- Populated user information (name and email) when fetching tasks  
- RESTful API design principles  
- Ready for **Postman** or any API testing tool  

---

## 🗂 Project Structure

todo-apis/
├── controllers/ # Logic for handling API requests
├── models/ # MongoDB schemas for User and Task
├── routes/ # API routes
├── middlewaare/ # Middleware for validation and authentication
├── package.json # Project dependencies
└── README.md # Project documentation

---

## 🛠 Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Backend web framework  
- **MongoDB** – Database for storing tasks and users  
- **Mongoose** – MongoDB object modeling  
- **Joi** – Data validation  
- **Postman** – API testing  

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/Wateta/Personal-Tasks-Management-System.git
cd Personal-Tasks-Management-System

