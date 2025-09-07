/* eslint-disable no-console */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user_routes.js";
import commentRouter from "./routes/comment_routes.js";
import postRouter from "./routes/post_routes.js";
import likeRouter from "./routes/like_routes.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/comment", commentRouter);
app.use("/post", postRouter);
app.use("/like", likeRouter);

mongoose
  .connect("mongodb://neco:123456@127.0.0.1:27017/")
  .then(() => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
