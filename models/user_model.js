import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
    },
    bio: {
      type: String,
      maxlength: 200, // Para não ficar muito grande
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  },
);

const User = mongoose.model("User", UserSchema);

export default User;
