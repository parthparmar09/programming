const { StatusCodes } = require("http-status-codes");
const conn = require("../database/connection");
const {likes} = require("../utils/queries.json");

const getPostLikes = async (req, res, next) => {
    const post_id = req.params.id;
    const [rows,fields] = await conn.query(likes.getPostLikes, [post_id]);
    
    if (rows.length == 0) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ success: false, message: "this post has no likes" });
      }
    
      res.status(StatusCodes.OK).json({
        success: true,
        message: "likes fetched successfully",
        data: {
          total: rows.length,
          likes: rows,
        },
      });
};
const likePost = async (req, res, next) => {
    const post_id = req.params.id;
    const user_id = req.user.id;
    
    const [rows,fields] = await conn.query(likes.likePost, [user_id,post_id]);

    res.status(StatusCodes.OK).json({
        success: true,
        message: "post liked",
      });

};
const unlikePost = async (req, res, next) => {
    const post_id = req.params.id;
    const user_id = req.user.id;

    const [rows,fields] = await conn.query(likes.unlikePost, [user_id,post_id]);

    res.status(StatusCodes.OK).json({
        success: true,
        message: "post unliked",
      });
};


module.exports = {getPostLikes, likePost, unlikePost}