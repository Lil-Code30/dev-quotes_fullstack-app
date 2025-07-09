# DevQuotes Frontend

This is the frontend for DevQuotes, a full-stack web application built with the MERN stack. It provides a platform for developers to discover, share, and collect their favorite quotes.

## Features

- **Browse and search for quotes:** Find inspiration from a vast collection of developer-centric quotes.
- **Create an account:** Sign up to personalize your experience and save your favorite quotes.
- **Add new quotes:** Contribute to the community by adding your own discoveries.
- **Favorites:** Curate a personal collection of quotes that resonate with you.
- **User authentication:** Securely log in and manage your account.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast and lightweight build tool for modern web development.
- **React Router:** For declarative routing in your React application.
- **Zustand:** A small, fast, and scalable state management solution.
- **Axios:** A promise-based HTTP client for making API requests.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **DaisyUI:** A component library for Tailwind CSS.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/dev-quotes.git
   ```
2. **Navigate to the frontend directory:**
   ```sh
   cd dev-quotes/frontend
   ```
3. **Install the dependencies:**
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Serves the production build locally.

## Project Structure

```
frontend/
├── public/             # Static assets
├── src/
│   ├── api/            # API-related functions
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Layout components
│   ├── pages/          # Application pages
│   ├── routes/         # Routing configuration
│   └── store/          # State management
├── .eslintrc.cjs       # ESLint configuration
├── .gitignore          # Git ignore file
├── index.html          # Main HTML file
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
└── vite.config.js      # Vite configuration
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
