const express = require("express");
const router = express.Router();

const { getAllReview, getReviewByID } = require("../controllers/review.controller");

router.get("/", getAllReview);
router.get("/:id", getReviewByID);

module.exports = router;
