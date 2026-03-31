const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const conn = require("./database/connection");
const { notFound, errorHandler } = require("./errors/errorHandler");
const { verifyJwt } = require("./middlewares/authenticate");
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const requestLogStream = fs.createWriteStream("./logs/httpLogs.log", {
  flags: "a",
});
app.use(morgan("combined", { stream: requestLogStream }));

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { name: "Someone" });
});

app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/uploads", require("./routes/uploads"));
app.use("/api/v1/posts", verifyJwt, require("./routes/posts"));

app.use(express.static("./public"));
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const startApp = () => {
  conn
    .query("SELECT 1")
    .then((data) => {
      app.listen(PORT, () => {
        console.log("server is running...");
      });
    })
    .catch((err) => {
      console.error(err);
      process.exit(0);
    });
};

startApp();
