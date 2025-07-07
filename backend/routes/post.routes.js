import express from "express";
import {
  setPost,
  getPosts,
  editPost,
  deletePost,
  likePost,
  disLikePost,
  getPost,
} from "../controllers/post.controllers.js";

export const router = express.Router();

router.get("/allquotes", getPosts);
router.get("/:id", getPost);
router.post("/newquote", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-quote/:id", likePost);
router.patch("/dislike-quote/:id", disLikePost);
