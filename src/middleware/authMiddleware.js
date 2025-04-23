const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1]; // Extract the token after "Bearer"
    jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Invalid token
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // No token provided
  }
};


module.exports = authenticateJWT;