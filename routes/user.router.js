const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  getAllFavorite,
  getAllOrder,
  getFavoriteByID,
  getOrderByID,
  addFavorite,
  addOrder,
  addUser,
  updateUserByID,
  updateOrderByID,
  updateFavoriteByID,
  deleteFavoriteByID,
  deleteOrderByID,
  deleteUserByID,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.delete("/:id", deleteUserByID);
router.put("/:id", updateUserByID);

router.get("/:id/favorite", getAllFavorite);
router.get("/:id/favorite/:favorite_id", getFavoriteByID);
router.post("/:id/favorite/", addFavorite);
router.delete("/:id/favorite/:favorite_id", deleteFavoriteByID);
router.put("/:id/favorite/:favorite_id", updateFavoriteByID);

router.get("/:id/order", getAllOrder);
router.get("/:id/order/:order_id", getOrderByID);
router.post("/:id/order/", addOrder);
router.delete("/:id/order/:order_id", deleteOrderByID);
router.put("/:id/order/:order_id", updateOrderByID);

module.exports = router;
