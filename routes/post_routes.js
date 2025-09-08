import express from "express";

import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post_controller.js";

import { countLikes, getLikes } from "../controllers/like_controller.js";

const router = express.Router();

router.post("/", createPost);

router.get("/:id/like/count", countLikes);
router.get("/:id/like", getLikes);
router.get("/:id", getPostById);
router.get("/", getPosts);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;
