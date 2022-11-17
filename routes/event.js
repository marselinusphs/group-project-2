const express = require("express");
const router = express.Router();

const { getAllEvent, getEventByID } = require("../controllers/event.controller");

router.get("/", getAllEvent);
router.get("/:id", getEventByID);

module.exports = router;
