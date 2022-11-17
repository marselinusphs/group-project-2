const express = require("express");
const router = express.Router();

const eventRouter = require("./event");
const userRouter = require("./user");
const favoriteRouter = require("./favorite");
const reviewRouter = require("./review");
const roleRouter = require("./role");

router.use("/event", eventRouter);
router.use("/user", userRouter);
router.use("/role", roleRouter);
router.use("/favorite", favoriteRouter);
router.use("/review", reviewRouter);

module.exports = router;
