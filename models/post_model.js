import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  },
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
