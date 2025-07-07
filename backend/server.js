import express from "express";
import cors from "cors";
import { router } from "./routes/post.routes.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 8000;

// connect to DB
connectDB();

const app = express();

//middleware
const allowedOrigin = "http://localhost:5173";

app.use(cors({ origin: allowedOrigin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/quotes", router);

// lauch the server
app.listen(PORT, () => console.log("Server running on part : ", PORT));
