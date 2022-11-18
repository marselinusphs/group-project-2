const connection = require("../config/db");

module.exports = {
  getAllRole: (req, res) => {
    connection.query("SELECT * FROM `role`", function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getRoleByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM role where id = ${id}`, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        message: "success get data",
        data: results[0],
      });
    });
  },
};
