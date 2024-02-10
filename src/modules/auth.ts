import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export const hashPassword = async (password) => {
 return await bcrypt.hash(password, 10);
}


export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }
  const token = bearer.split("Bearer ")[1].trim();

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};
