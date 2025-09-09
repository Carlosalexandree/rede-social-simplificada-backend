import express from "express";

import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post_controller.js";

import { countLikes, getLikes } from "../controllers/like_controller.js";
import {
  countComments,
  getComments,
} from "../controllers/comment_controller.js";

const router = express.Router();

router.post("/", createPost);

router.get("/:id/comments/count", countComments);
router.get("/:id/comments", getComments);
router.get("/:id/likes/count", countLikes);
router.get("/:id/likes", getLikes);
router.get("/:id", getPostById);
router.get("/", getPosts);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;
