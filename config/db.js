const mongoose = require("mongoose");
require("dotenv").config();
const main = async () => {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log("DB connecttion Established");
};
main().catch((err) => console.log(err));
