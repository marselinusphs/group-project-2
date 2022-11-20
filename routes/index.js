const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifytoken");

const eventRouter = require("./event.router");
const userRouter = require("./user.router");
// const roleRouter = require("./role.router");
const authRouter = require("./auth.router");

router.use("/event", eventRouter);
router.use("/user", verifyToken, userRouter);
// router.use("/role", roleRouter);
router.use("/auth", authRouter);

module.exports = router;
