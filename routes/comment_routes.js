import express from "express";

import {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment,
} from "../controllers/comment_controller.js";

const router = express.Router();

router.post("/", createComment);
router.get("/", getComments);
router.get("/", getCommentById);
router.put("/", updateComment);
router.delete("/", deleteComment);

export default router;
