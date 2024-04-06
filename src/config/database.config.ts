import { Sequelize } from "sequelize";
import { DATABASE_DIALECT, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME } from "./env-var";

export const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: DATABASE_DIALECT,
});

export const connectToDatabase = () => {
  sequelize.sync().then(() => console.log('Database & tables created!'));
};
