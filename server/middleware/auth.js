import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if(!token) return res.status(401).json({ message: "Access Denied" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;

    next();

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
}