const MyError = require("../errors/MyError");
const { StatusCodes } = require("http-status-codes");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

function createJwt(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET);
}

function verifyJwt(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    throw new MyError(StatusCodes.UNAUTHORIZED, "Token Not Found");
  }
  if (!token.startsWith("Bearer")) {
    throw new MyError(StatusCodes.UNAUTHORIZED, "Invalid Token");
  }
  const payload = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
  if (!payload) {
    throw new MyError(StatusCodes.UNAUTHORIZED, "Invalid Token");
  }

  req.user = payload;
  next();
}

async function hashPwd(pwd) {
  const salt = await bcrypt.genSalt(5);
  const hashed = await bcrypt.hash(pwd, salt);
  return hashed;
}

async function verifyPwd(pwd, hashed) {
  return await bcrypt.compare(pwd, hashed);
}

module.exports = { createJwt, verifyJwt, hashPwd, verifyPwd };
