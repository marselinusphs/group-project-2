const connection = require("../config/db");

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

  getAllFavorite: (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM favorite where user_id = ${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getAllOrder: (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM \`order\` where user_id = ${id}`, function (err, results, fields) {
      res.json({
        message: "success get data all order",
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

  getOrderByID: (req, res) => {
    const { id, order_id } = req.params;

    connection.query(`SELECT * FROM \`order\` where id = ${order_id} AND user_id=${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },
};
