import express from "express";
import cors from "cors";
import { quoteRouter } from "./routes/post.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 8000;

// connect to DB
connectDB();

const app = express();

//middleware
const allowedOrigin = "https://dev-quotes-v1.vercel.app";

app.use(cors({ origin: allowedOrigin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/quotes", quoteRouter);
app.use("/auth", authRouter);

// lauch the server
app.listen(PORT, () => console.log("Server running on part : ", PORT));
