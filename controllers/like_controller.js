import Like from "../models/like_model.js";

export const toggleLike = async (req, res) => {
  const { post_id } = req.body;
  const user_id = req.user.id;

  try {
    const existingLike = await Like.findOne({
      user_id,
      post_id: post_id || null,
    });
    if (existingLike) {
      await existingLike.deleteOne();
      res.json({ message: "Like removido com sucesso" });
      return;
    }

    const like = await Like.create({
      user_id,
      post_id: post_id || null,
    });
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ error: "Erro ao precessar like" });
  }
};

export const countLikes = async (req, res) => {
  const { post_id } = req.params;

  try {
    const count = await Like.countDocuments({
      post_id,
    });
    res.json({ total_likes: count });
  } catch (error) {
    res.status(500).json({ error: "Erro ao contar likes " });
  }
};

export const getLikes = async (req, res) => {
  const { post_id } = req.params;

  try {
    const likes = await Like.find({
      post_id: post_id || null,
    }).populate("user_id", "name email");
    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar likes" });
  }
};
