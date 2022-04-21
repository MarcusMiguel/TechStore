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

  const users = await User.find();
  console.log(users)

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {

    const username = await User.findOne({
      username: req.body.username
    });
    const email = await User.findOne({
      email: req.body.email
    });

    if (username) {
      res.status(500).send({ message: "Username is aready is use." })
    }
    else if (email) {
      res.status(500).send({ message: "Email is aready is use." })
    }
    else {
      res.status(500).send({ message: "Error creating user." })
    }
  }

});

router.post('/login', async (req, res) => {
  try {
    const users = await User.find();
    console.log(users)

    const user = await User.findOne(
      {
        username: req.body.username
      }
    );
    !user && res.status(401).send({ message: "Wrong Username or Password." });

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      password_secret_key
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword != inputPassword &&
      res.status(401).send({ message: "Wrong Username or Password." });

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      jwt_secret_key,
      { expiresIn: "10h" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });

  } catch (err) {
    res.status(500).send({ message: "Wrong Username or Password." });
  }

});

export default router;