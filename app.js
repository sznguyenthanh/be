const express = require("express");
const cors = require("cors"); // cho phép bên ngoài truy cập vào cái api bên trong app
const app = express();
const connectDb = require("./db");
const port = 5000;

const router_weather = require("./routes");

app.use(cors());
app.use(express.json()); // format dữ liệu gửi lên qua dạng json
app.use(express.urlencoded());
app.use(router_weather);

app.listen(port, () => {
  connectDb();
  console.log(`Server listening on port ${port}`);
});
