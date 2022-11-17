const express = require("express");
const router = express.Router();

const { getAllRole, getRoleByID } = require("../controllers/role.controller");

router.get("/", getAllRole);
router.get("/:id", getRoleByID);

module.exports = router;
