import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/models.js";

// create new user
export const signin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!req.body || !username || !email || !password) {
      res.status(404).json({
        error: "Please enter your username and email and password",
      });
    }

    // verify if username already exist in the db
    const isUsernameExist = await UserModel.findByUsername(username);
    if (isUsernameExist.length !== 0) {
      res.status(409).json({
        error: "username already exists. Please enter a new username",
      });
    }

    // verify if email already exist in the db
    const isEmailExist = await UserModel.findByEmail(email);
    if (isEmailExist.length !== 0) {
      res.status(409).json({
        error: "email adresse already exists. Please enter a new email.",
      });
    }

    // HASH PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      email,
      password: hashPassword,
    };

    const user = await UserModel.create(newUser);

    const jsonToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_WORD,
      { expiresIn: "2h" }
    );

    const userWithoutPassword = {
      userId: user._id,
      username,
      email,
      jsonToken,
    };

    res.status(200).json(userWithoutPassword);
  } catch (err) {
    console.log(`Error when creating new user : ${err.message}`);
    res.status(400).json({
      error: `Error when creating new user`,
    });
  }
};

// login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!req.body || !email || !password) {
      res.status(404).json({
        error: "Please enter your username and email",
      });
    }

    const user = await UserModel.findOne({ email: email });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(400).json({
        error: `Wrong password. Please verify your password`,
      });
    }

    const jsonToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_WORD,
      { expiresIn: "2h" }
    );

    const userWithoutPassword = {
      userId: user._id,
      username: user.username,
      email: user.email,
      jsonToken,
    };
    res.status(200).json(userWithoutPassword);
  } catch (err) {
    console.log(`Error when login the user : ${err.message}`);
    res.status(400).json({
      error: `Error when login the user : ${err.message}`,
    });
  }
};
