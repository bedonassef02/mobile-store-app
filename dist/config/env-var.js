"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = exports.getSecretKey = void 0;
function getDatabaseConfig() {
    const dialect = (process.env.DATABASE_DIALECT || 'mysql');
    return {
        name: process.env.DATABASE_NAME || 'mobile-store',
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD || '',
        host: process.env.DATABASE_HOST || 'localhost',
        dialect,
        logging: process.env.DATABASE_LOGGING === 'true',
    };
}
const getSecretKey = () => process.env.SECRET_KEY || '';
exports.getSecretKey = getSecretKey;
// Export the database configuration
exports.databaseConfig = getDatabaseConfig();
