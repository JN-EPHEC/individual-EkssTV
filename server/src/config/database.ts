import { Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL is missing in environment variables");
}

const sequelize = new Sequelize(dbUrl, {
  logging: false,
});


sequelize.authenticate().then(() => {
console.log("Database connected successfully!");
})
.catch((err) => {
console.error("Database connection error:", err);
});
export default sequelize