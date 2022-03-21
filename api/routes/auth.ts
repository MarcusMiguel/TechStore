import express from "express";
import User from "../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const router = express.Router();
const password_secret_key = process.env.PASSWORD_SECRET_KEY;
const jwt_secret_key = process.env.JWT_SECRET_KEY;

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      password_secret_key
    ).toString(),
  });

  try {
    const savedUser = newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne(
      {
        userName: req.body.username
      }
    );

    !user && res.status(401).json("Wrong Password or UserName");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      password_secret_key
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword != inputPassword &&
      res.status(401).json("Wrong Password or UserName");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      jwt_secret_key,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });

  } catch (err) {
    res.status(500).json(err);
  }

});

export default router;