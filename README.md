# Dev Quotes Fullstack MERN App

This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to share and manage development-related quotes. It features a simple and intuitive interface for a seamless user experience.

## Features

- **User Authentication:** Secure user authentication using JWT (JSON Web Tokens).
- **CRUD Operations:** Create, Read, Update, and Delete quotes.
- **Like and Dislike:** Engage with quotes by liking or disliking them.
- **Favorites:** Mark quotes as favorites to easily find them later.
- **Responsive Design:** A responsive layout that works on all devices.

## Tech Stack

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web development.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **DaisyUI:** A component library for Tailwind CSS.
- **Zustand:** A small, fast, and scalable state management solution.
- **Lucide-React:** A library of simply designed icons.

### Backend

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database for storing and managing data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT:** A compact, URL-safe means of representing claims to be transferred between two parties.
- **Bcrypt:** A library for hashing passwords.
- **Cors:** A package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **Dotenv:** A zero-dependency module that loads environment variables from a `.env` file.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dev-quotes_fullstack-app.git
   cd dev-quotes_fullstack-app
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend server:
     ```bash
     npm run watch
     ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

The application should now be running on your local machine.

## API Endpoints

The following table lists the available API endpoints:

### Authentication

| Method | Endpoint      | Description      |
|--------|---------------|------------------|
| POST   | `/auth/signin`| Register a new user |
| POST   | `/auth/login` | Login a user     |

### Quotes

| Method | Endpoint                   | Description                | Authentication |
|--------|----------------------------|----------------------------|----------------|
| GET    | `/quotes/allquotes`        | Get all quotes             | No             |
| GET    | `/quotes/:id`              | Get a single quote by ID   | No             |
| POST   | `/quotes/newquote`         | Add a new quote            | Yes            |
| PUT    | `/quotes/:id`              | Update a quote by ID       | Yes            |
| DELETE | `/quotes/:id`              | Delete a quote by ID       | Yes            |
| PATCH  | `/quotes/like-quote/:id`   | Like a quote by ID         | No             |
| PATCH  | `/quotes/dislike-quote/:id`| Dislike a quote by ID      | No             |


