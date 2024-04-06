import { Dialect } from "sequelize";

export type SequelizeDialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

// Define an interface for the database configuration
export interface DatabaseConfig {
    name: string;
    username: string;
    password: string;
    host: string;
    dialect: Dialect;
    logging: boolean;
   }
   