const { Router } = require("express");
const weatherSchema = require("./schema/weather");
const controlSchema = require("./schema/control");
const customerSchema = require("./schema/user");

const router_weather = Router();

router_weather.get("/get-data", async (req, res) => {
  const get_weather = await weatherSchema.find();

  let weather = [];

  for (const x of get_weather) {
    weather.push(x.temp);
  }

  res.json(weather);
});

router_weather.get("/add-weather", async (req, res) => {
  await weatherSchema.create({
    temp: 16,
    hu: 40,
    loca: "Ca mau",
  });

  res.send("create success");
});

router_weather.get("/change-state", async (req, res) => {
  try {
    // check data
    const check = await controlSchema.find();

    if (check.length === 0) {
      await controlSchema.create({
        state: true,
      });
    } else {
      // update data
      check[0].state = !check[0].state;

      await check[0].save();
    }

    res.json({ success: true });
  } catch (error) {
    res.json({
      success: false,
    });
  }
});

router_weather.post("/add-user", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  await new customerSchema({
    username,
    password,
    isAdmin: true,
  }).save();

  res.status(200).send("add new user success");
});

router_weather.get("/check-user/:username", async (req, res) => {
  const { username } = req.params;

  const user = await customerSchema.find({
    username,
  });

  res.json(user);
});
module.exports = router_weather;
