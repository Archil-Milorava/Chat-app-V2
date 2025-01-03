import { generateToken } from "../middlewares/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";

export const signUp = async (req, res) => {
  const { nickName, email, password } = req.body;

  try {
    if (!nickName || !email || !password) {
      return res.status(400).json({
        message: "Please give all credentials",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password should have more than 6 characters",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "The user already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      nickName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log("error from sign up", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export const logIn = async (req, res) => {
  const { nickName, password } = req.body;

  try {
    if (!nickName || !password) {
      return res.status(400).json({
        message: "Please provied right credentials",
      });
    }

    const user = await User.findOne({ nickName });

    if (!user) {
      return res.status(400).json({
        message: "user does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = await generateToken(user._id);

    res.cookie("loginToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log("error from log in", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export const logOut = async (req, res) => {
  res.clearCookie("loginToken");
  res.send("Logged out successfully");
};

export const getCurrentUser = async (req, res) => {
  const currentUserId = req.user.id;
  try {
    console.log(currentUserId);

    const currentUser = await User.findById(currentUserId).select("-password");

    if (!currentUser) {
      return res.status(400).json({
        message: "Please Log in first",
      });
    }

    res.status(200).json({
      currentUser,
    });
  } catch (error) {
    console.log("error from get current user", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    let { profilePic } = req.body;
    const userId = req.user.id;

    if (!profilePic) {
      return res.status(400).json({
        message: "picture is required",
      });
    } else {
      const result = await cloudinary.uploader.upload(profilePic);
      profilePic = result.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic },
      {
        new: true,
      }
    );

    res.status(201).json({
      updatedUser,
    });
  } catch (error) {
    console.log("error from update user", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
