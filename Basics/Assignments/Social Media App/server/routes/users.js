const {loginUser, resgisterUser,getUsersPosts,getLikedPosts, changePass, updateProfile } = require('../controllers/users'); 
const { verifyJwt } = require('../middlewares/authenticate');
const sendOtp = require("../middlewares/nodemailer");
const router = require('express').Router();

router.route('/login').post(loginUser);
router.route('/register').post(resgisterUser);
router.route('/profile/changePass').post(changePass);
router.route('/profile/getOtp').post(sendOtp);
router.route('/profile/update').post(verifyJwt, updateProfile);
router.route('/:id/posts').get(verifyJwt, getUsersPosts);

module.exports = router;