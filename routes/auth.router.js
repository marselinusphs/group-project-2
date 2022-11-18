const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// const { getAllUser, getUserByID } = require("../controllers/user.controller");

const getAllUser = [
  {
    id: 1,
    name: "Aldi",
    email: "aldi@gmail.com",
    password: "aldi123",
    role_id: 1,
  },
  {
    id: 2,
    name: "Budi",
    email: "budi@gmail.com",
    password: "budi123",
    role_id: 1,
  },
  {
    id: 3,
    name: "Caca",
    email: "caca@gmail.com",
    password: "caca123",
    role_id: 1,
  },
  {
    id: 4,
    name: "Marselinus",
    email: "marselinusphs@gmail.com",
    password: "marselinus123",
    role_id: 2,
  },
  {
    id: 5,
    name: "Rovinda",
    email: "rovinda@gmail.com",
    password: "rovinda123",
    role_id: 2,
  },
  {
    id: 6,
    name: "Nola",
    email: "nola@gmail.com",
    password: "nola123",
    role_id: 2,
  },
];

router.post("/login", (req, res) => {
  const data = req.body;
  const isUserExist = getAllUser.find((item) => data.email === item.email && data.password === item.password);

  if (isUserExist) {
    res.json({
      message: "login success",
      token: "asdf",
    });
  } else {
    res.status(401).json({
      message: "email or password incorrect",
    });
  }
});

router.post("/register", (req, res) => {
  res.json({
    message: "register",
  });
});

module.exports = router;
