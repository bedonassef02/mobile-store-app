import { Sequelize } from 'sequelize';
import { databaseConfig } from '../env-var';
export const sequelize: Sequelize = new Sequelize(
  databaseConfig.name,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    logging: databaseConfig.logging,
  },
);
