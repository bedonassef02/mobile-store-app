import { Sequelize } from 'sequelize';
import { databaseConfig } from '../env-var';

// Use the configuration to create the Sequelize instance
export const sequelize = new Sequelize(databaseConfig.name, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    logging: databaseConfig.logging,
  });