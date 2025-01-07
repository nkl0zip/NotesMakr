const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.homepage);
router.get("/features", mainController.features);
router.get("/about", mainController.about);
router.get("/faqs", mainController.faqs);

module.exports = router;
