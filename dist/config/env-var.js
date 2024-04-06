"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
// Function to get the database configuration
function getDatabaseConfig() {
    const dialect = (process.env.DATABASE_DIALECT || 'mysql');
    return {
        name: process.env.DATABASE_NAME || 'mobile-store',
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD || '',
        host: process.env.DATABASE_HOST || 'localhost',
        dialect,
    };
}
// Export the database configuration
exports.databaseConfig = getDatabaseConfig();
