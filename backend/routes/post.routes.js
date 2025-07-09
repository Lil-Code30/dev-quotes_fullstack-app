import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  setPost,
  getPosts,
  editPost,
  deletePost,
  likePost,
  disLikePost,
  getPost,
} from "../controllers/post.controllers.js";

export const quoteRouter = express.Router();

quoteRouter.get("/allquotes", getPosts);
quoteRouter.get("/:id", getPost);
quoteRouter.post("/newquote", authMiddleware, setPost);
quoteRouter.put("/:id", editPost);
quoteRouter.delete("/:id", authMiddleware, deletePost);
quoteRouter.patch("/like-quote/:id", likePost);
quoteRouter.patch("/dislike-quote/:id", disLikePost);
