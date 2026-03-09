const nodemailer = require("nodemailer");
const { users } = require("../utils/queries.json");
const conn = require("../database/connection");
const MyError = require("../errors/MyError");
const { StatusCodes } = require("http-status-codes");
const { tempUserSchema } = require("../models/Schemas");

require("dotenv").config();

//supplying the user credentials and service form
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SERVER_EMAIL,
    pass: process.env.SERVER_PASS,
  },
});

const sendOtp = async (req, res, next) => {
  const { error } = tempUserSchema.validate(req.body);
  if (error) {
    throw new MyError(StatusCodes.BAD_REQUEST, error.details[0].message);
  }
  const { email } = req.body;

  const otp = Math.floor(Math.random() * 1000 + (9999 - 1000));

  var mailOptions = {
    from: "My Social App",
    to: email,
    subject: "OTP for e-mail verification: " + otp,
    html: `
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">My Social App</a>
        </div>
        <p style="font-size:1.1em">Hello,</p>
        <p>Use the following OTP to verify your email. This OTP is valid for 5 minutes</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
        <p style="font-size:0.9em;">Regards,<br />pp0pp</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>Peace✌️</p>
        </div>
      </div>
    </div>`,
  };

  transport.sendMail(mailOptions, async (err, info) => {
    if (err) {
      next(new MyError(StatusCodes.INTERNAL_SERVER_ERROR, err.message));
    } else {
      const [rows, fields] = await conn.query(users.tempAdd, [email, otp]);

      res
        .status(StatusCodes.CREATED)
        .json({ success: true, message: "OTP has been sent to " + email });
    }
  });
};

module.exports = sendOtp;
