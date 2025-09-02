import User from "../models/user_model.js";

export const createUser = async (req, res) => {
  const { name, email, password, avatar_url, bio } = req.body;

  const isNameValid = typeof name === "string" && name && name.trim();

  if (!isNameValid) {
    res.status(400).json({ error: "O nome é obrigatorio" });
    return;
  }

  const isEmailValid = typeof email === "string" && email && email.trim();

  if (!isEmailValid) {
    res.status(400).json({ error: "O email é obrigatorio" });
    return;
  }

  const isPassValid =
    typeof password === "string" && password && password.trim();

  if (!isPassValid) {
    res.status(400).json({ error: "Senha obrigatória" });
    return;
  }

  try {
    const user = await User.findOne({ email: email.trim() });
    if (user) {
      res.status(400).json({ error: "Email já cadastrado" });
      return;
    }

    const newUser = await User.create({
      name,
      email,
      password,
      avatar_url,
      bio,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const findAllUsers = await User.find({});
    res.status(200).json(findAllUsers);
  } catch (error) {
    res.status(500).json({ error: "Usuários não encontrados" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, avatar_url, bio } = req.body;

  function validadeUserUpdate(name, email) {
    const isNameValid = typeof name === "string" && name && name.trim();
    const isEmailValid = typeof email === "string" && email && email.trim();

    if (!isNameValid) {
      return "Nome é obrigatório";
    }

    if (!isEmailValid) {
      return "Email é obrigatório";
    }

    return null;
  }

  const error = validadeUserUpdate(name, email);
  if (error) {
    res.status(400).json({ error });
    return;
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name, email, avatar_url, bio },
      { new: true }
    );

    if (!updateUser) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return;
    }
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
