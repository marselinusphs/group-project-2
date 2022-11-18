const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { getAllFavorite, getFavoriteByID } = require("../controllers/favorite.controller");

router.get("/", getAllFavorite);
router.get("/:id", getFavoriteByID);

module.exports = router;
