const { StatusCodes } = require("http-status-codes");
const MyError = require("../errors/MyError");
const conn = require("../database/connection");
const {users} = require("../utils/queries");
const {
  createJwt,
  hashPwd,
  verifyPwd,
} = require("../middlewares/authenticate");
const { registerSchema, loginSchema, changePassSchema } = require("../models/Schemas");

const getUser = async (email, id) => {
  let [rows, fields] = await conn.query(
    users.getUser,
    [email, id]
  );
  return rows[0];
};

const loginUser = async (req, res, next) => {
  const {error} = loginSchema.validate(req.body);
  if(error){
    throw new MyError(StatusCodes.BAD_REQUEST, error.details[0].message);
  }
  const { email, password } = req.body;

  const user = await getUser(email);
  if (!user) {
    throw new MyError(
      StatusCodes.NOT_FOUND,
      `No account with email ${email} exists`
    );
  }

  if (!(await verifyPwd(password, user.password))) {
    throw new MyError(StatusCodes.UNAUTHORIZED, `Incorrect password`);
  }

  const token = createJwt({
    id: user.user_id,
    name: user.username,
    email: user.email,
  });
  res.status(StatusCodes.OK).json({
    success: true,
    message: "user logged in",
    data: { user, token },
  });
};

const resgisterUser = async (req, res, next) => {
  const {error} = registerSchema.validate(req.body);
  if(error){
    throw new MyError(StatusCodes.BAD_REQUEST, error.details[0].message);
  }
  const { username, email, password, image_url , bio} = req.body;


  const hashedPwd = await hashPwd(password);

  let [result, fields] = await conn.query(
    users.registerUser,
    [username, email, hashedPwd, image_url, bio]
  );
  const user = await getUser(null, result.insertId);

  const token = createJwt({
    id: user.user_id,
    name: user.username,
    email: user.email,
  });

  res.status(StatusCodes.OK).json({
    success: true,
    message: "user registered",
    data: { user, token },
  });
};

const getUsersPosts = async (req, res, next) => {
  const user_id = req.params.id;

  const [rows, fields] = await conn.query(users.getUsersPosts,[user_id]);

  if (rows.length == 0) {
    return res
      .status(StatusCodes.OK)
      .json({ success: false, message: "this user has no posts" });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    message: "posts fetched successfully",
    data: {
      total: rows.length,
      posts: rows,
    },
  });
};



const changePass = async (req,res,next) => {
  const {error} = changePassSchema.validate(req.body);
  if(error){
    throw new MyError(StatusCodes.BAD_REQUEST, error.details[0].message);
  }
  const {email, password, otp} =  req.body;

  const [rows, fields] = await conn.query(users.tempRemove, [email,otp]);

  if(rows.affectedRows == 0){
    throw new MyError(StatusCodes.NOT_IMPLEMENTED, "invalid OTP");
  }

  const hashedPwd = await hashPwd(password);

  const [rows2, fields2] = await conn.query(users.changePass, [hashedPwd, email]);

  res.status(StatusCodes.CREATED).json({success : true, message : "password changed"});
  

}

const updateProfile = async (req,res,next) => {
  const user_id = req.user.id;
  const {username , bio} = req.body;

  let query = users.updateProfile;

  if(username){
    query += `username = '${username}',`;
  }
  if(bio){
    query += `bio = '${bio}', `;
  }
  if(!username && !bio){
    throw new MyError(StatusCodes.BAD_REQUEST, "at least one field is required");
  }

  query = query.slice(0,-1);
  query += ` WHERE user_id = '${user_id}' ; `;

  const [rows, fields] = await conn.query(query);

  res.status(StatusCodes.OK).json({success : true, message : "profile updated successfully"});
}

module.exports = { loginUser, resgisterUser, getUsersPosts, changePass , updateProfile };
