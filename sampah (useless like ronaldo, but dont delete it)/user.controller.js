const connection = require("../config/config");
const models = require("../models");
const { User, Order, Favorite, Review, Role } = models;
const jwt = require("jsonwebtoken");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll();
    res.json({
      message: "success get data",
      data: users,
    });
  },

  getUserByID: async (req, res) => {
    const { id } = req.params;
    const users = await User.findByPk(id);
    res.json({
      message: "success get data",
      data: users,
    });
  },

  addUser: async (req, res) => {
    const { name, email, password, role_id } = req.body;
    const user = await User.create({ name, email, password, role_id });

    res.status(200).json({
      message: "success insert data",
      data: user,
    });
  },

  deleteUserByID: async (req, res) => {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "success delete data",
    });
  },

  updateUserByID: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role_id } = req.body;

    await User.update(
      { name, email, password, role_id },
      {
        where: {
          id,
        },
      }
    );

    res.json({
      message: "success edit data",
    });
  },

  getAllOrder: async (req, res) => {
    const { id } = req.params;
    const orders = await Order.findAll({
      where: {
        user_id: id,
      },
    });

    res.json({
      message: "success get data",
      data: orders,
    });
  },

  getOrderByID: (req, res) => {
    try {
      const { id, order_id } = req.params;
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      // jwt.verify(token, "marselinus");

      connection.query(`SELECT * FROM \`order\` where id = ${order_id} AND user_id=${id}`, function (err, results, fields) {
        // connection.query(`SELECT * FROM \`order\``, function (err, results, fields) {
        res.json({
          message: "success get data",
          data: results,
        });
      });
    } catch (error) {
      res.status(500).json({
        message: "not valid token",
      });
    }
  },

  addOrder: (req, res) => {},

  deleteOrderByID: (req, res) => {},

  updateOrderByID: (req, res) => {},

  getAllFavorite: (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM favorite where user_id = ${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getFavoriteByID: (req, res) => {
    const { id, favorite_id } = req.params;

    connection.query(`SELECT * FROM favorite where id = ${favorite_id} AND user_id=${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  addFavorite: (req, res) => {},

  deleteFavoriteByID: (req, res) => {},

  updateFavoriteByID: (req, res) => {},
};
