const express = require("express");
const models = require("../models");
const { User, Order, Favorite, Event, Role } = models;
const router = express.Router();
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const data = req.body;
  const users = await User.findAll({
    where: {
      email: data.email,
    },
  });

  const { password } = users[0].dataValues;
  const checkPwd = bcrypt.compareSync(data.password, password);

  if (checkPwd) {
    const token = jwt.sign(
      {
        id: users[0].dataValues.id,
        name: users[0].dataValues.name,
        email: users[0].dataValues.email,
        role: users[0].dataValues.role_id,
      },
      process.env.KEY,
      { expiresIn: "8h" }
    );

    res.json({
      message: "login success",
      token,
    });
  } else {
    res.status(401).json({
      message: "email or password incorrect",
    });
  }
});

router.post("/register", async (req, res) => {
  const saltRounds = 10;
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const user = await User.create({ name, email, password: hashedPassword });

  res.status(200).json({
    message: "success insert data",
    data: user,
  });
});

module.exports = router;
