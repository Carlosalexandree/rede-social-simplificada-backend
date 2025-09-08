import mongoose from "mongoose";

const likeSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  },
);

const Like = mongoose.model("Like", likeSchema);
export default Like;
