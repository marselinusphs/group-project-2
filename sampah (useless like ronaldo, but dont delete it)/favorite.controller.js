const connection = require("./config/config");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllFavorite: (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const isTokenValid = jwt.verify(token, "marselinus");
      console.log("IsTokenValid: ", isTokenValid);

      connection.query("SELECT * FROM `favorite`", function (err, results, fields) {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available

        res.json({
          message: "success get data",
          data: results,
        });
      });
    } catch (error) {
      res.status(500).json({
        message: "error di favorite controller/token expired",
      });
    }
  },

  getFavoriteByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM favorite where id = ${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },
};
