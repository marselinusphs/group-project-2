const connection = require("../config/config");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllUser: (req, res) => {
    connection.query("SELECT * FROM `user`", function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getUserByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM user where id = ${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  addUser: (req, res) => {},

  deleteUserByID: (req, res) => {},

  updateUserByID: (req, res) => {},

  getAllOrder: (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM \`order\` where user_id = ${id}`, function (err, results, fields) {
      res.json({
        message: "success get data all order",
        data: results,
      });
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
