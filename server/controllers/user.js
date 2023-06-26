

import User from "../model/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const getUsers = async (req, res, next) => {
  try {
    const users = await user.find();
    res.send(users);
  } catch (error) {
    res.send("users not found");
    next();
  }
};

const getUserByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getuser = await user.findOne({ _id: id });
    if (getuser) {
      console.log(getuser);
      res.send(getuser);
    } else {
      res.send("error finding user");
    }
  } catch (error) {
    console.log("error getting user with id");
    next(error);
  }
};

const registeruser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    let user = {
      firstName,
      lastName,
      email,
      password: hashPassword,
    };
    console.log(req.body);
    console.log(user);
    await User.create(user);
    if (user) {
      let token = jwt.sign(
        { userid: user._id },
        process.env.JWT_secret_key,
        { expiresIn: "10h" }
      );
      console.log(token);

      res.cookie("hash", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development", //For HTTPS on the production
        sameSite: "strict", //prevent CSRF Attacks
        maxAge: 7 * 24 * 60 * 60,
      });
    }

    res.send("user successfully signed up");
  } catch (error) {
    res.send("failed user register process");
    next();
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const loginUser = await User.findOne({ email });

    if (!loginUser) {
      res.status(404);
      next(new Error("user not found"));
    }

    const matchpassword = await bcrypt.compare(password, loginUser.password);
    if (!matchpassword) {
      res.status(404);
      next(new Error("invalid credentials"));
    }

    if (loginUser && matchpassword) {
      let token = jwt.sign(
        { userid: loginUser._id },
        process.env.JWT_secret_key,
        { expiresIn: "10h" }
      );

      res.cookie("hash", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development", //For HTTPS on the production
        sameSite: "strict", //prevent CSRF Attacks
        maxAge: 7 * 24 * 60 * 60,
      });

      res.json({
        id: loginUser._id,
        name: loginUser.name,
        email: loginUser.email,
      });
    }
  } catch (error) {
    res.send("error in login endpoint");
  }
};

const logoutUser= (req, res, next) => {
  try {
    res.cookie("hash", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ msg: "Logging Out user" });
  } catch (error) {
    console.log("error in logout endpoint");
    next(err);
  }
};

export {
  getUsers,
  getuserByID,
  registeruser,
  userLogin,
  logoutUser,
};

