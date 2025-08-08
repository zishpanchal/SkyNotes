# SkyNotes ☁️📝

A modern, cloud-based personal notebook application built with the MERN stack. SkyNotes provides a seamless note-taking experience with secure user authentication and real-time synchronization.

## ✨ Features

- **Secure Authentication**: JWT-based user authentication and authorization
- **CRUD Operations**: Create, read, update, and delete notes effortlessly
- **Cloud Storage**: Notes are securely stored in MongoDB cloud database
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Instant synchronization across all devices
- **User-friendly Interface**: Clean and intuitive React-based UI

## 🛠️ Tech Stack

**Frontend:**
- React.js
- HTML5 & CSS3
- JavaScript (ES6+)
- Responsive Web Design

**Backend:**
- Node.js
- Express.js
- RESTful API architecture

**Database:**
- MongoDB
- Mongoose ODM

**Authentication:**
- JSON Web Tokens (JWT)
- bcrypt for password hashing

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zishpanchal/SkyNotes.git
   cd SkyNotes
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

5. **Start the application**
   
   **Development mode (both frontend and backend):**
   ```bash
   npm run dev
   ```
   
   **Backend only:**
   ```bash
   npm start
   ```
   
   **Frontend only:**
   ```bash
   cd client
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
SkyNotes/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── App.js
│   └── package.json
├── models/                 # MongoDB models
├── routes/                 # Express routes
├── middleware/             # Custom middleware
├── config/                 # Configuration files
├── server.js              # Express server
├── package.json
└── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/user` - Get user profile

### Notes
- `GET /api/notes` - Fetch all user notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm test

# Run backend tests
npm test
```

## 🚢 Deployment

### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
```

### Backend (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Deploy the root directory (excludes client folder)

### Full Stack (Railway/Render)
Configure build commands for both frontend and backend deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Zish Panchal**
- GitHub: [@zishpanchal](https://github.com/zishpanchal)

## 🙏 Acknowledgments

- Built with Create React App
- MongoDB for database solutions
- Express.js framework
- React community for excellent documentation

## 📞 Support

If you have any questions or need help getting started, please open an issue in the GitHub repository.

---

⭐ Star this repository if you found it helpful!
