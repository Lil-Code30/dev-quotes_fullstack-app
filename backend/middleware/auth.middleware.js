import jwt from "jsonwebtoken";
import { UserModel } from "../models/models.js";

const authMiddleware = (req, res, next) => {
  try {
    //get token from header
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    //verify token
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);

    //get user from token
    const user = UserModel.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Add user to request object
    req.user = {
      id: decoded._id,
      username: decoded.username,
      email: decoded.email,
    };
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired" });
    }
    res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
