const connection = require("../config/db");

module.exports = {
  getAllUser: (req, res) => {
    connection.query("SELECT * FROM `user`", function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        massage: "success get data",
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
        massage: "success get data",
        data: results[0],
      });
    });
  },
};
