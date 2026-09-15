const notFound = (req, res) => {
  res.status(404).json({
    error: {
      message: `Route ${req.originalUrl} not found`,
      statusCode: 404,
    },
  });
};

module.exports = { notFound };
