const connection = require("../config/db");

module.exports = {
  getAllRole: (req, res) => {
    connection.query("SELECT * FROM `role`", function (err, results, fields) {
      0;

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getRoleByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM role where id = ${id}`, function (err, results, fields) {
      0;

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },
};
