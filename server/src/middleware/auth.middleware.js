import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader === "undefined") {
    return res
      .status(401)
      .json({ message: "Acceso no autorizado. Token requerido" });
  }

  const bearerToken = bearerHeader.split(" ")[1];

  jwt.verify(bearerToken, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido." });
    }

    req.userId = user.userId;

    next();
  });
};

export const generateToken = (userId) => {
  const secretKey = process.env.TOKEN_SECRET;
  const expiresIn = "1h";

  return jwt.sign({ userId }, secretKey, { expiresIn });
};
