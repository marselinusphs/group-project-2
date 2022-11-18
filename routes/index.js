const express = require("express");
const router = express.Router();

const eventRouter = require("./event.router");
const userRouter = require("./user.router");
const favoriteRouter = require("./favorite.router");
const reviewRouter = require("./review.router");
const roleRouter = require("./role.router");
const authRouter = require("./auth.router");
const orderRouter = require("./order.router");

router.use("/event", eventRouter);
router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/favorite", favoriteRouter);
router.use("/review", reviewRouter);
router.use("/auth", authRouter);
router.use("/order", orderRouter);

module.exports = router;
