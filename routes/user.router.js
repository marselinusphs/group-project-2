const express = require("express");
const router = express.Router();

const { getAllUser, getUserByID } = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);

module.exports = router;
