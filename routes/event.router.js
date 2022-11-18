const express = require("express");
const router = express.Router();

const { getAllEvent, getEventByID, getAllReview, getReviewByID } = require("../controllers/event.controller");

router.get("/", getAllEvent);
router.get("/:id", getEventByID);
router.get("/:id/review", getAllReview);
router.get("/:id/review/:review_id", getReviewByID);

module.exports = router;
