"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConstants = void 0;
require('dotenv').config();
// require('env').env;
const envConstants = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    PRIVATE_AUTH_SECRET: process.env.PRIVATE_AUTH_SECRET,
    DB: {
        LOCAL: {
            name: process.env.DB_name,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },
        DEV: {
            name: process.env.DB_name,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },
        PROD: {
            name: process.env.DB_name,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },
    },
};
exports.envConstants = envConstants;
