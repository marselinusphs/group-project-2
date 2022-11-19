const express = require("express");
const router = express.Router();

const { getAllEvent, getEventByID, getAllReview, getReviewByID, addEvent, addReview, deleteEventByID, deleteReviewByID, updateEventByID, updateReviewByID } = require("../controllers/event.controller");

router.get("/", getAllEvent);
router.get("/:id", getEventByID);
router.post("/", addEvent);
router.delete("/:id", deleteEventByID);
router.put("/:id", updateEventByID);

router.get("/:id/review", getAllReview);
router.get("/:id/review/:review_id", getReviewByID);
router.post("/:id/review/", addReview);
router.delete("/:id/review/:review_id", deleteReviewByID);
router.put("/:id/review/:review_id", updateReviewByID);

module.exports = router;
