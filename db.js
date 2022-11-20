const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nami123:nami123@atlascluster.gpsyr.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("connect db success");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;
