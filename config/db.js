import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const main = async () => {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log("DB connection Established");
};
main().catch((err) => {
      console.log(err.message);
      process.exit(1);
});
export default main;
