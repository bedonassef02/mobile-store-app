const DATABASE_NAME = process.env.DATABASE_NAME || "mobile-store";
const DATABASE_USERNAME = process.env.DATABASE_USERNAME || "root";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
const DATABASE_DIALECT = process.env.DATABASE_DIALECT || "mysql";

module.exports = {
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_DIALECT,
    DATABASE_HOST,
    DATABASE_USERNAME,
}