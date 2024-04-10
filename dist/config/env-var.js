"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = exports.getSecretKey = void 0;
function getDatabaseConfig() {
    const dialect = (process.env.MYSQL_DIALECT ||
        'mysql');
    return {
        name: process.env.DB_NAME || 'mobile-store',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        host: process.env.DB_HOST || 'localhost',
        dialect,
        logging: process.env.MYSQL_LOGGING === 'true',
    };
}
const getSecretKey = () => process.env.SECRET_KEY || '';
exports.getSecretKey = getSecretKey;
// Export the database configuration
exports.databaseConfig = getDatabaseConfig();
