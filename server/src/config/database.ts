import { Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize.authenticate().then(() => {
console.log("Database connected successfully!");
})
.catch((err) => {
console.error("Database connection error:", err);
});
export default sequelize