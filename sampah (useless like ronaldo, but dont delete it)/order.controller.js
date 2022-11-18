const connection = require("../config/db");

module.exports = {
  getAllOrder: (req, res) => {
    connection.query("SELECT * FROM `order`", function (err, results, fields) {
      0;

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getOrderByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM order where id = ${id}`, function (err, results, fields) {
      0;

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },
};
