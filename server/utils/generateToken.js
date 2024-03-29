import jwt from "jsonwebtoken";

export default function generateTokenAndSetCookie(userId, res) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // prevents client side JS from reading the cookie. prevents XSS attacks,
    sameSite: "strict", // CSRF attacks cross-site request forgery
    secure: process.env.NODE_ENV !== "development",
    // secure: process.env.NODE_ENV === "production" ? true : false,
  });
}
