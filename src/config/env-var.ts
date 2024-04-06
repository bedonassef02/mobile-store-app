import { DatabaseConfig, SequelizeDialect } from "../utils/types/database-config.type";

// Function to get the database configuration
function getDatabaseConfig(): DatabaseConfig {
  const dialect = (process.env.DATABASE_DIALECT || 'mysql') as SequelizeDialect;

  return {
    name: process.env.DATABASE_NAME || 'mobile-store',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect,
    logging: process.env.DATABASE_LOGGING === "true"
  };
}

// Export the database configuration
export const databaseConfig = getDatabaseConfig();
