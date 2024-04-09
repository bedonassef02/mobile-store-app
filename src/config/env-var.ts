import {
  DatabaseConfig,
  SequelizeDialect,
} from '../utils/types/database-config.type';

function getDatabaseConfig(): DatabaseConfig {
  const dialect: SequelizeDialect = (process.env.MYSQL_DIALECT ||
    'mysql') as SequelizeDialect;

  return {
    name: process.env.DB_NAME || 'mobile-store',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || 'localhost',
    dialect,
    logging: process.env.MYSQL_LOGGING === 'true',
  };
}

export const getSecretKey = () => process.env.SECRET_KEY || '';

// Export the database configuration
export const databaseConfig = getDatabaseConfig();
