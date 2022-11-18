const express = require("express");
const router = express.Router();

const { getAllUser, getUserByID, getAllFavorite, getAllOrder, getFavoriteByID, getOrderByID } = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.get("/:id/favorite", getAllFavorite);
router.get("/:id/order", getAllOrder);
router.get("/:id/favorite/:favorite_id", getFavoriteByID);
router.get("/:id/order/:order_id", getOrderByID);

module.exports = router;
