import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  const token = req.cookies.loginToken;

  if (!token) {
    return res.status(401).json({
      message: "Please Log in",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed", error);
    res.status(401).json({
      message: "Token is not valid",
    });
  }
};


