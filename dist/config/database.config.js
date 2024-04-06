"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const env_var_1 = require("./env-var");
// Create a function to get the database configuration
const getDatabaseConfig = () => ({
    name: env_var_1.databaseConfig.name,
    username: env_var_1.databaseConfig.username,
    password: env_var_1.databaseConfig.password,
    host: env_var_1.databaseConfig.host,
    dialect: env_var_1.databaseConfig.dialect, // Type assertion to ensure it's a Dialect
});
// Use the configuration to create the Sequelize instance
exports.sequelize = new sequelize_1.Sequelize(getDatabaseConfig());
const connectToDatabase = () => {
    exports.sequelize.sync().then(() => console.log('Database & tables created!'));
};
exports.connectToDatabase = connectToDatabase;
