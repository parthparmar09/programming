
const notFound = (req, res, next) => {
  const err = new Error("Page Not Found");
  res.status(404);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  if (status != 404) {
    console.log(err);
  }
  res.status(status).json({ success: false, message: err.message});
};


module.exports = { notFound, errorHandler };

