import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user_controller.js";

import {
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/comment_controller.js";

import { toggleLike } from "../controllers/like_controller.js";

const router = express.Router();

router.post("/comment", createComment);
router.post("/like", toggleLike);
router.post("/", createUser);

router.get("/:id", getUserById);
router.get("/", getUsers);

router.put("/comment/:id", updateComment);
router.put("/:id", updateUser);

router.delete("/comment/:id", deleteComment);
router.delete("/:id", deleteUser);

export default router;
