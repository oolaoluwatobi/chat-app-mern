import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    console.log(verified, "verified___PROTECT_ROUTE");

    const user = await User.findById(verified.userId).select("-password");
    console.log(user, "user___PROTECT_ROUTE");

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
