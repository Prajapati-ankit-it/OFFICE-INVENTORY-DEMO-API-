"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../constant/env");
process.env.NODE_ENV = env_1.envConstants.ENVIRONMENT;
module.exports = () => {
    switch (process.env.NODE_ENV) {
        case "local":
            return {
                DB: env_1.envConstants.DB.LOCAL,
            };
        case "dev":
            return {
                DB: env_1.envConstants.DB.DEV,
            };
        case "production":
            return {
                DB: env_1.envConstants.DB.PROD,
            };
        default:
            return {
                DB: env_1.envConstants.DB.LOCAL,
            };
    }
};
