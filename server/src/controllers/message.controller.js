import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersList = async (req, res) => {
  try {
    const loggedInUser = req.user.id;
    const filteredUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json({
      filteredUser,
    });
  } catch (error) {
    console.log("error from get users list", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export const getDirectMessage = async (req, res) => {
  const { userId: userTochatId } = req.params;
  const myId = req.user.id;

  try {
    const conversation = await Message.find({
      $or: [
        { senderId: myId, receiverId: userTochatId },
        { senderId: userTochatId, receiverId: myId },
      ],
    });

    res.status(200).json(conversation);
  } catch (error) {
    console.error("Error from getDirectMessage", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const sendMessage = async (req, res) => {
  const senderId = req.user.id;
  const { id: receiverId } = req.params;
  const { text, image } = req.body;

  try {
    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image,
    });

    await newMessage.save();

    res.status(201).json({
      newMessage,
    });
  } catch (error) {
    console.log("error from send message", error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
