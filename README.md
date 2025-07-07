# Dev Quotes Fullstack MERN App

This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to share and manage development-related quotes.

## Features

*   **View Quotes:** Browse a collection of development-related quotes.
*   **Add New Quotes:** Contribute your own quotes to the collection.
*   **User-Friendly Interface:** A simple and intuitive interface for a seamless user experience.

## Tech Stack

*   **Frontend:**
    *   React.js
    *   Vite
    *   CSS
*   **Backend:**
    *   Node.js
    *   Express.js
    *   MongoDB
    *   Mongoose

## File Structure

```
dev-quotes_fullstack-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Prerequisites

*   Node.js and npm installed
*   MongoDB installed and running

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/dev-quotes_fullstack-app.git
    cd dev-quotes_fullstack-app
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in the `backend` directory and add your MongoDB connection string:
        ```
        MONGO_URI=your_mongodb_connection_string
        ```
    *   Start the backend server:
        ```bash
        npm start
        ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    *   Start the frontend development server:
        ```bash
        npm run dev
        ```

The application should now be running on your local machine.

## API Endpoints

The following table lists the available API endpoints for managing quotes:

| Method | Endpoint                   | Description                |
|--------|----------------------------|----------------------------|
| GET    | `/quotes/allquotes`        | Get all quotes             |
| GET    | `/quotes/:id`              | Get a single quote by ID   |
| POST   | `/quotes/newquote`         | Add a new quote            |
| PUT    | `/quotes/:id`              | Update a quote by ID       |
| DELETE | `/quotes/:id`              | Delete a quote by ID       |
| PATCH  | `/quotes/like-quote/:id`   | Like a quote by ID         |
| PATCH  | `/quotes/dislike-quote/:id`| Dislike a quote by ID      |


