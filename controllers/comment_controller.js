import mongoose from "mongoose";
import Comment from "../models/comment_model.js";
import { isDataValid } from "../shared/helpers.js";

export const createComment = async (req, res) => {
  const { user_id, post_id, content } = req.body;

  const isTextValid = isDataValid(content);
  const isUseridValid = mongoose.Types.ObjectId.isValid(user_id);
  const isPostidValid = mongoose.Types.ObjectId.isValid(post_id);

  if ((!isTextValid, !isUseridValid, !isPostidValid)) {
    res.status(400).json({ error: "Dados inválidos" });
    return;
  }

  try {
    const newComment = await Comment.create({
      user_id,
      post_id,
      content,
    });
    res.status(200).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar comentario" });
  }
};

export const getComments = async (req, res) => {
  try {
    const findAllComments = await Comment.find({});
    res.status(200).json(findAllComments);
  } catch (error) {
    res.status(500).json({ error: "Comentario não encontrado" });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);

    res.status(200).json({ comment });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar comentario" });
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) {
    res.status(400).json({ error: "Comentario não encontrado" });
    return;
  }

  try {
    const comment = await Comment.findByIdAndUpdate(
      id,
      { content },
      { new: true },
    );
    if (!comment) {
      res.status(404).json({ error: "Conteudo do comentario não encontrado" });
      return;
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    await Comment.findByIdAndDelete(id);
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
