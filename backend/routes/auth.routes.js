import express from "express";
import { signin, login } from "../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/signin", signin);
authRouter.post("/login", login);
