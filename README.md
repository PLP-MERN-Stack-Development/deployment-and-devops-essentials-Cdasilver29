# MERN Blog Application

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A full-stack blog platform built with **MongoDB, Express.js, React.js, and Node.js**.  
It allows users to create, read, update, and delete blog posts, organize them by category, and interact through comments.  

The app includes search, filtering, and pagination for smooth navigation, with both frontend and backend validation to ensure data integrity.  
It’s designed to demonstrate complete MERN integration, clean architecture, and modern state management in React.

---

## 🌐 Live Demo

👉 [View Live Demo](https://your-deployment-link.com) *(replace with your deployed app URL)*

## 📸 Application Screenshots

### Homepage / Posts List
![Homepage Screenshot](./screenshots/homepage.png)
*The main blog page showing all posts with search, filtering, and pagination.*

### Single Post View
![Single Post Screenshot](./screenshots/single-post.png)
*Detailed view of an individual blog post with comments section.*

### Create/Edit Post Form
![Create Post Screenshot](./screenshots/create-post-form.png)
*Form interface for creating new blog posts or editing existing ones.*

### Server Runtime
![Terminal Screenshot](./screenshots/servers-running.png)
*Terminal showing both backend (Node.js/Express) and frontend (React/Vite) servers running concurrently.*

### Database Collections
![MongoDB Screenshot](./screenshots/mongodb-collections.png)
*MongoDB Compass/Atlas showing the posts and categories collections with sample data.*

---

## 🚀 Features

- Create, read, update, and delete blog posts  
- Manage categories  
- Add and view comments  
- Search and filter posts  
- Pagination  
- User authentication *(optional advanced feature)*  
- Image upload support *(optional advanced feature)*  
- Responsive UI  
- Input validation with **Joi**  
- Centralized error handling  

---

## 🧠 Learning Focus

This project was built as part of the **PLP MERN Stack Integration (Week 4)** assignment to demonstrate:

- Seamless integration between front-end and back-end  
- RESTful API design and CRUD operations  
- State management using React hooks and context  
- Data validation on both client and server  
- Clean code organization and separation of concerns  

---

## 🛠️ Tech Stack

**Frontend:**
- React 18  
- React Router  
- Axios  
- Tailwind CSS  
- Vite  

**Backend:**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Joi (validation)  

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js v18+  
- MongoDB (local or Atlas instance)  

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (Local instance or a cloud Atlas cluster)

### Steps

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd mern-stack-integration-Cdasilver29
    ```

2.  **Setup Backend**
    ```bash
    cd server
    npm install
    ```

3.  **Setup Frontend**
    ```bash
    cd ../client
    npm install
    ```

4.  **Environment Configuration**

    **Server (.env)**
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    NODE_ENV=development
    JWT_SECRET=your_secret_key_for_authentication
    ```

    **Client (.env)**
    ```env
    VITE_API_URL=http://localhost:5000/api
    ```

5.  **Run the Application**

    Run the backend (from `/server` directory):
    ```bash
    npm run dev
    ```

    Run the frontend (from `/client` directory in a new terminal):
    ```bash
    npm run dev
    ```

6.  **Access the App**
    - Frontend: http://localhost:3000
    - Backend API: http://localhost:5000

## 📚 API Documentation

### Posts Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/posts` | Get all posts (supports pagination, search, filtering) |
| `GET` | `/api/posts/:id` | Get a specific post by ID |
| `POST` | `/api/posts` | Create a new post |
| `PUT` | `/api/posts/:id` | Update a post by ID |
| `DELETE` | `/api/posts/:id` | Delete a post by ID |
| `POST` | `/api/posts/:id/comments` | Add a comment to a specific post |

### Categories Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/categories` | Get all categories |
| `POST` | `/api/categories` | Create a new category |

## 📁 Project Structure

```plaintext
mern-stack-integration-Cdasilver29/
├── server/                 # Backend (Express.js)
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware (auth, error handling)
│   ├── models/            # Mongoose models (Post, Category, User)
│   ├── routes/            # API routes
│   ├── utils/             # Helper functions & constants
│   └── server.js          # Application entry point
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page-level components
│   │   ├── services/      # API service functions (Axios)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # React Context for state management
│   │   ├── utils/         # Frontend helpers & validation
│   │   └── App.jsx        # Main App component
│   └── index.html
│
└── README.md
📸 Screenshots


Example:
https://./screenshots/homepage.png
Caption: The main blog page showing a list of posts with search and categories.

🤝 Contributing
Contributions are welcome! If you'd like to improve this project, please follow these steps:

Fork the repository.

Create a new feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Calvine Dasilver Mugunda

PLP MERN Stack Development Program

GitHub: @Cdasilver29