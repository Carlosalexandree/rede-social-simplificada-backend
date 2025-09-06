import mongoose from "mongoose";
import Post from "../models/post_model.js";
import { isDataValid } from "../shared/helpers";

export const createPost = async (req, res) => {
  const { user_id, content, type } = req.body;

  const isUseridValid = mongoose.Types.ObjectId.isValid(user_id);
  const isTextValid = isDataValid(content);
  const isTypeValid = isDataValid(type);

  if ((!isUseridValid, !isTextValid, !isTypeValid)) {
    res.status(400).json({ error: "Dados inválidos" });
    return;
  }

  try {
    const newPost = await Post.create({
      user_id,
      content,
      type,
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o post." });
  }
};

export const getPosts = async (req, res) => {
  try {
    const findAllPosts = await Post.find({});
    res.status(200).json(findAllPosts);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar post." });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar post." });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) {
    res.status(400).json({ error: "Conteúdo inválido" });
    return;
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "ID do post é inválido" });
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, { content }, { new: true });
    if (!post) {
      res.status(400).json({ error: "Post não encontrado" });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
