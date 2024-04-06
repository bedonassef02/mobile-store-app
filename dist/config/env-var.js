"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_DIALECT = exports.DATABASE_HOST = exports.DATABASE_PASSWORD = exports.DATABASE_USERNAME = exports.DATABASE_NAME = void 0;
exports.DATABASE_NAME = process.env.DATABASE_NAME || 'mobile-store';
exports.DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'root';
exports.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
exports.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
exports.DATABASE_DIALECT = (process.env.DATABASE_DIALECT || 'mysql');
