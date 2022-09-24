import userLoginService from "../services/userLogin.service";

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userLogin = await userLoginService(email, password);

    return res.status(200).json(userLogin);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default userLoginController;
