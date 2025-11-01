# 📝 MERN Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js (MERN stack). Features include user authentication, CRUD operations for blog posts, image uploads, comments, search functionality, and more.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![React](https://img.shields.io/badge/react-18.x-blue)

## ✨ Features

### Core Features
- 🔐 **User Authentication** - Secure JWT-based registration and login
- 📰 **Blog Posts** - Create, read, update, and delete blog posts
- 🏷️ **Categories** - Organize posts by categories
- 🖼️ **Image Uploads** - Upload featured images for blog posts
- 💬 **Comments System** - Engage with posts through comments
- 🔍 **Search & Filter** - Search posts by title/content and filter by category
- 📄 **Pagination** - Efficient pagination for post listings
- 👤 **User Roles** - Admin and regular user roles with different permissions
- 🔒 **Protected Routes** - Secure routes requiring authentication
- 📊 **Post Analytics** - View count tracking

### Technical Features
- ✅ RESTful API design
- ✅ Input validation and sanitization
- ✅ Error handling middleware
- ✅ Rate limiting for API security
- ✅ Responsive UI with Tailwind CSS
- ✅ Optimistic UI updates
- ✅ Custom React hooks
- ✅ Context API for state management

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **Express-validator** - Input validation

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to your `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-blog
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Frontend Setup

```bash
# Navigate to client directory (from root)
cd ../client

# Install dependencies
npm install
```

### 4. Initialize MongoDB

Make sure MongoDB is running on your machine:

```bash
# On macOS/Linux
sudo systemctl start mongod

# On Windows
net start MongoDB
```

### 5. Seed Initial Data (Optional)

```bash
# From server directory
cd server
node seedData.js
```

This will create initial categories for your blog.

## 🎯 Running the Application

### Development Mode

You need to run both the backend and frontend servers:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Server will run on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
Client will run on `http://localhost:5173`

### Production Build

**Build the frontend:**
```bash
cd client
npm run build
```

**Run the backend:**
```bash
cd server
npm start
```

## 📁 Project Structure

```
mern-blog-app/
├── server/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── postController.js     # Post CRUD operations
│   │   ├── categoryController.js # Category operations
│   │   └── commentController.js  # Comment operations
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication
│   │   ├── errorHandler.js      # Error handling
│   │   └── validation.js        # Input validation
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Post.js              # Post schema
│   │   ├── Category.js          # Category schema
│   │   └── Comment.js           # Comment schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   ├── postRoutes.js        # Post endpoints
│   │   ├── categoryRoutes.js    # Category endpoints
│   │   └── commentRoutes.js     # Comment endpoints
│   ├── uploads/                 # Uploaded images
│   ├── .env                     # Environment variables
│   ├── server.js               # Entry point
│   └── package.json
│
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── Layout.jsx          # Main layout
    │   │   ├── ProtectedRoute.jsx  # Route protection
    │   │   ├── Comments.jsx        # Comments component
    │   │   ├── Loading.jsx         # Loading spinner
    │   │   └── ErrorMessage.jsx    # Error display
    │   ├── pages/
    │   │   ├── PostList.jsx        # Post listing
    │   │   ├── PostDetail.jsx      # Single post view
    │   │   ├── PostForm.jsx        # Create/Edit post
    │   │   ├── Login.jsx           # Login page
    │   │   └── Register.jsx        # Registration page
    │   ├── hooks/
    │   │   ├── useApi.js           # API call hook
    │   │   └── useDebounce.js      # Debounce hook
    │   ├── services/
    │   │   ├── api.js              # Axios instance
    │   │   ├── authService.js      # Auth API calls
    │   │   ├── postService.js      # Post API calls
    │   │   ├── categoryService.js  # Category API calls
    │   │   └── commentService.js   # Comment API calls
    │   ├── context/
    │   │   └── AuthContext.jsx     # Auth state management
    │   ├── config/
    │   │   └── index.js            # App configuration
    │   ├── App.jsx                 # Main app component
    │   └── main.jsx                # Entry point
    └── package.json
```

## 🔑 API Endpoints

### Authentication
```
POST   /api/auth/register      # Register new user
POST   /api/auth/login         # Login user
GET    /api/auth/me            # Get current user
```

### Posts
```
GET    /api/posts              # Get all posts (with pagination, search, filter)
GET    /api/posts/:id          # Get single post
POST   /api/posts              # Create new post (protected)
PUT    /api/posts/:id          # Update post (protected)
DELETE /api/posts/:id          # Delete post (protected)
```

### Categories
```
GET    /api/categories         # Get all categories
POST   /api/categories         # Create category (admin only)
```

### Comments
```
GET    /api/posts/:postId/comments      # Get comments for a post
POST   /api/posts/:postId/comments      # Add comment (protected)
DELETE /api/posts/:postId/comments/:id  # Delete comment (protected)
```

## 🎨 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Frontend (optional .env)
```env
VITE_API_URL=http://localhost:5000
```

## 🧪 Testing

### Manual Testing Workflow

1. **Register a new user** at `/register`
2. **Login** with your credentials
3. **Create a new post** - Navigate to "Create Post"
4. **View all posts** - Check the homepage
5. **Search and filter** - Use search bar and category filter
6. **View single post** - Click on any post
7. **Add comments** - Add a comment to a post
8. **Edit post** - Edit your own post
9. **Delete post** - Delete your own post

## 🐛 Common Issues & Solutions

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
sudo systemctl status mongod

# Or start MongoDB
sudo systemctl start mongod
```

### Port Already in Use
```bash
# Find and kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

### CORS Issues
- Ensure `CLIENT_URL` in backend `.env` matches your frontend URL
- Check CORS configuration in `server.js`

### Image Upload Not Working
- Verify `uploads/` folder exists in server directory
- Check folder permissions
- Ensure multer is properly configured

## 🚀 Deployment

### Backend (Heroku, Railway, Render, etc.)

1. Set environment variables on your hosting platform
2. Ensure MongoDB is accessible (use MongoDB Atlas for production)
3. Update `CLIENT_URL` to your production frontend URL

### Frontend (Vercel, Netlify, etc.)

1. Build the application: `npm run build`
2. Deploy the `dist` folder
3. Set environment variable `VITE_API_URL` to your backend URL

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Jennifer Omoregie


## 🙏 Acknowledgments

- MongoDB documentation
- Express.js documentation
- React documentation
- Node.js community
- All contributors and supporters

## 📸 Screenshots

### Homepage
<img width="1729" height="277" alt="Screenshot 2025-11-01 061650" src="https://github.com/user-attachments/assets/c6a4304b-c5f5-4803-aed1-a676a474dbac" />


### Loginpage
<img width="1576" height="509" alt="Screenshot 2025-11-01 061625" src="https://github.com/user-attachments/assets/e89e79ff-6cba-41bb-bc95-310b067f70af" />

### Register page
<img width="1624" height="680" alt="Screenshot 2025-11-01 061539" src="https://github.com/user-attachments/assets/b713b698-8955-475d-8980-846a91b96542" />



---

⭐ If you found this project helpful, please give it a star!

Made with ❤️ using MERN Stack
