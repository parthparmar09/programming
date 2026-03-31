const {getPosts, uploadPost, getPostById, deletePost, updatePost,getLikedPosts} = require('../controllers/posts');
const {getPostLikes, likePost, unlikePost} = require('../controllers/likes');
const {getPostComments, commentPost, uncommentPost} = require('../controllers/comments');
const router = require("express").Router();


router.route("/").get(getPosts).post(uploadPost);
router.route("/filter?").get(getLikedPosts)
router.route("/:post_id").get(getPostById).delete(deletePost).put(updatePost);

router.route("/:post_id/likes").get(getPostLikes).post(likePost).delete(unlikePost);

router.route("/:post_id/comments").get(getPostComments).post(commentPost).delete(uncommentPost);

module.exports = router;
