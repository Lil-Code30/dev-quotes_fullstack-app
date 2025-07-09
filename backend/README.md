# DevQuotes Backend

This is the backend for the DevQuotes application, a platform for sharing and discovering developer-focused quotes. It's built with Node.js, Express, and MongoDB.

## Features

- User authentication (signup and login)
- CRUD operations for quotes (Create, Read, Update, Delete)
- Liking and disliking quotes

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (local or cloud)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/dev-quotes_fullstack-app.git
    cd dev-quotes_fullstack-app/backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables:

    ```env
    MONGO_URL=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>
    ```

    Replace `<your-mongodb-connection-string>` and `<your-jwt-secret>` with your actual values.

### Running the Application

-   **Start the server:**
    ```bash
    npm run server
    ```
-   **Start in watch mode (restarts on file changes):**
    ```bash
    npm run watch
    ```

## Project Structure

```
backend/
├── config/
│   └── db.js           # MongoDB connection
├── controllers/
│   ├── auth.controller.js # Authentication logic
│   └── post.controllers.js # Quote-related logic
├── middleware/
│   └── auth.middleware.js # JWT authentication middleware
├── models/
│   └── models.js         # Mongoose data models
├── routes/
│   ├── auth.routes.js    # Authentication routes
│   └── post.routes.js    # Quote routes
├── .env.example        # Example environment variables
├── .gitignore
├── package.json
├── package-lock.json
└── server.js           # Main application entry point
```

## API Endpoints

All endpoints are prefixed with `/api`.

### Authentication

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/signin` | Register a new user. |
| `POST` | `/auth/login` | Log in an existing user. |

### Quotes

| Method | Endpoint | Description | Protected |
| :--- | :--- | :--- | :--- |
| `GET` | `/quotes/allquotes` | Get all quotes. | No |
| `GET` | `/quotes/:id` | Get a single quote by ID. | No |
| `POST` | `/quotes/newquote` | Create a new quote. | Yes |
| `PUT` | `/quotes/:id` | Update an existing quote. | Yes |
| `DELETE` | `/quotes/:id` | Delete a quote. | Yes |
| `PATCH` | `/quotes/like-quote/:id` | Like a quote. | No |
| `PATCH` | `/quotes/dislike-quote/:id`| Dislike a quote. | No |

## Dependencies

-   **bcrypt**: For hashing passwords.
-   **cors**: To enable Cross-Origin Resource Sharing.
-   **dotenv**: To manage environment variables.
-   **express**: Web framework for Node.js.
-   **jsonwebtoken**: For generating and verifying JSON Web Tokens.
-   **mongoose**: MongoDB object modeling tool.