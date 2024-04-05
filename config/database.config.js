const Sequelize = require("sequelize");
const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_DIALECT } = require("./env-var");

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: DATABASE_DIALECT,
});

const connectToDatabase = () => {
  sequelize.sync().then(() => console.log("Database & tables created!"));
};

module.exports = { connectToDatabase, sequelize };
