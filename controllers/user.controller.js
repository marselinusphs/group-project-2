const connection = require("../config/db");

module.exports = {
  getAllUser: (req, res) => {
    connection.query("SELECT * FROM `user`", function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getUserByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM user where id = ${id}`, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        message: "success get data",
        data: results[0],
      });
    });
  },

  getAllFavorite: (req, res) => {
    connection.query("SELECT * FROM `favorite`", function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getFavoriteByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM favorite where id = ${id}`, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        message: "success get data",
        data: results[0],
      });
    });
  },
};
