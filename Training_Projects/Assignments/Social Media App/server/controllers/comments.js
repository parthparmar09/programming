const { StatusCodes } = require("http-status-codes");
const conn = require("../database/connection");
const MyError = require("../errors/MyError");
const {comments} = require("../utils/queries.json");

const getPostComments = async (req, res, next) => {
    const post_id = req.params.id;
    const [rows,fields] = await conn.query(comments.getPostComments, [post_id]);
    
    if (rows.length == 0) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ success: false, message: "this post has no comments" });
      }
    
      res.status(StatusCodes.OK).json({
        success: true,
        message: "comments fetched successfully",
        data: {
          total: rows.length,
          comments: rows,
        },
      });
};
const commentPost = async (req, res, next) => {
    const post_id = req.params.id;
    const content = req.body.content;
    const user_id = req.user.id;

    const [rows,fields] = await conn.query(comments.commentPost, [user_id,post_id,content]);
    res.status(StatusCodes.OK).json({
        success: true,
        message: "commented successfully",
      });

};
const uncommentPost = async (req, res, next) => {
    const comment_id = req.body.comment_id;
    const user_id = req.user.id;

    const [rows,fields] = await conn.query(comments.uncommentPost, [user_id,comment_id]);

    if(rows.affectedRows == 0){
      throw new MyError(StatusCodes.UNAUTHORIZED , "You can't delete this comment");
    }


    res.status(StatusCodes.OK).json({
        success: true,
        message: "comment deleted",
      });
};

module.exports = {getPostComments, commentPost, uncommentPost}