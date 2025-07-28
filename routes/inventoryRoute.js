const express = require("express");
const router = new express.Router();
const inventoryController = require("../controllers/inventoryController");

// Vehicle detail page route
router.get("/detail/:invId", inventoryController.buildDetailView);

module.exports = router;
