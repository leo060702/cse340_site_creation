const express = require("express");
const router = new express.Router();

// Intentional error route for testing 500 error handling
router.get("/cause-error", (req, res, next) => {
  const err = new Error("Intentional Server Error");
  err.status = 500;
  next(err);
});

module.exports = router;
