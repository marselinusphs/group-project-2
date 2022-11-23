const express = require("express");
const app = express();

const PORT = process.env.PORT;
const allRouter = require("./routes");

app.use(express.json());
app.use(allRouter);

app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
