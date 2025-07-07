const express = require('express');
const path = require('path');
const router = express.Router();

// Serve static files from "public" directory
router.use(express.static("public"));

// Optional: Explicit subdirectories (can be removed if public/已处理)
router.use("/css", express.static(path.join(__dirname, "../public/css")));
router.use("/js", express.static(path.join(__dirname, "../public/js")));
router.use("/images", express.static(path.join(__dirname, "../public/images")));

// ✅ Handle root path (homepage)
router.get("/", (req, res) => {
  res.render("index");  // This will render views/index.ejs
});

module.exports = router;




