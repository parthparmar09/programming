const { StatusCodes } = require("http-status-codes");
const MyError = require("../errors/MyError");
const conn = require("../database/connection");
const {posts} = require("../utils/queries");
const { postSchema } = require("../models/Schemas");

const getPosts = async (req, res, next) => {

  const [rows, fields] = await conn.query(posts.getPosts);

  if (rows.length == 0) {
    return res
      .status(StatusCodes.OK)
      .json({ success: false, message: "No posts found" });
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
const getPostById = async (req, res, next) => {
  const {post_id} = req.params;

  const [rows, fields] = await conn.query(posts.getPostById, [post_id]);
  if (rows.length == 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: "No post found" });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    message: "post fetched successfully",
    data: {
      total: rows.length,
      posts: rows[0],
    },
  });
};


const getLikedPosts = async (req, res, next) => {
  const {liked} = req.query;

  if(liked !== "true"){return};
  
  const user_id = req.user.id;
  const [rows, fields] = await conn.query(posts.getLikedPosts, [user_id]);

  if (rows.length == 0) {
    return res
      .status(StatusCodes.OK)
      .json({ success: false, message: "you have not liked any post" });
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


const uploadPost = async (req, res, next) => {
  const {error} = postSchema.validate(req.body);
  if(error){
    throw new MyError(StatusCodes.BAD_REQUEST, error.details[0].message);
  }
  const user_id = req.user.id;
  const { content, image_url } = req.body;
  const [result, fields] = await conn.query(
    posts.uploadPost,
    [content, image_url, user_id]
  );

  res.status(StatusCodes.CREATED).json({success : true, message : "post uploaded successfully"});
};


const deletePost = async (req, res, next) => {
  const user_id = req.user.id;
  const { post_id} = req.params;

  const [result, fields] = await conn.query(posts.deletePost, [post_id, user_id]);
  if(result.affectedRows === 0){
    return res
  .status(StatusCodes.NOT_IMPLEMENTED).json({success : false, message: "can't delete the post"});
  }
  res.status(StatusCodes.CREATED).json({success : true, message : "post deleted successfully"});

};


const updatePost = async (req, res, next) => {
  const user_id = req.user.id;
  const { post_id} = req.params;
  const {content} = req.body;

  console.log(user_id, post_id, content);

  const [result, fields] = await conn.query(posts.updatePost, [content, post_id, user_id]);
  if(result.changedRows == 0){
    return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ success: false, message: "can't update the post" });
  }
  res.status(StatusCodes.CREATED).json({success : true, message : "post updated successfully"});

};

module.exports = { getPosts, uploadPost, getPostById, deletePost, updatePost,getLikedPosts };
