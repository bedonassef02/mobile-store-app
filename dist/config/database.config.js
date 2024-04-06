"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const env_var_1 = require("./env-var");
exports.sequelize = new sequelize_1.Sequelize(env_var_1.DATABASE_NAME, env_var_1.DATABASE_USERNAME, env_var_1.DATABASE_PASSWORD, {
    host: env_var_1.DATABASE_HOST,
    dialect: env_var_1.DATABASE_DIALECT,
});
const connectToDatabase = () => {
    exports.sequelize.sync().then(() => console.log('Database & tables created!'));
};
exports.connectToDatabase = connectToDatabase;
