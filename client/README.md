# MERN Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js.

## Features

- ✅ Create, read, update, and delete blog posts
- ✅ Category management
- ✅ Comments system
- ✅ Search and filtering
- ✅ Pagination
- ✅ Responsive design
- ✅ Input validation
- ✅ Error handling

## Tech Stack

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

## Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd mern-blog-app
Install server dependencies

cd server
npm install
Install client dependencies

cd ../client
npm install
Configure environment variables
Server .env:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_secret_key
Client .env:

VITE_API_URL=http://localhost:5000/api
Start the servers
Terminal 1 (Backend):


cd server
npm run dev
Terminal 2 (Frontend):


cd client
npm run dev
Access the application at http://localhost:3000
API Documentation
Posts Endpoints
GET /api/posts - Get all posts (supports pagination, search, filtering)
GET /api/posts/:id - Get single post
POST /api/posts - Create new post
PUT /api/posts/:id - Update post
DELETE /api/posts/:id - Delete post
POST /api/posts/:id/comments - Add comment
Categories Endpoints
GET /api/categories - Get all categories
POST /api/categories - Create category
Project Structure
mern-blog-app/
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── App.jsx
│   └── index.html
└── README.md


Author
Calvine Dasilver


---

## ✅ **Git Setup and Submission**

1. **Create .gitignore** in root:
node_modules/ .env dist/ .DS_Store


2. **Git commands**:
```bash
# In root directory
git add .
git commit -m "Initial commit: MERN blog application"
git branch -M main
git remote add origin <your-github-classroom-repo-url>
git push -u origin main


🎯 Key Learning Points
MERN Integration: Frontend and backend communicate via RESTful APIs
State Management: Context API manages global state
Data Flow: User action → Component → API call → Server → Database → Response → Update UI
Validation: Both client-side (forms) and server-side (Joi)
Error Handling: Try-catch blocks, error middleware
Relationships: MongoDB references (Post → Category)
Optimistic Updates: UI updates immediately, syncs with server