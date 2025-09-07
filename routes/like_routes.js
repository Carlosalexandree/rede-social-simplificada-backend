import express from "express";

import {
  toggleLike,
  countLikes,
  getLikes,
} from "../controllers/like_controller.js";

const router = express.Router();

router.post("/", toggleLike);
router.get("/count/:id?", countLikes);
router.get("/:post_id?", getLikes);

export default router;
