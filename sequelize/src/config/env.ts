import { envConstants as env } from "../constant/env"
process.env.NODE_ENV = env.ENVIRONMENT;

module.exports = () => {
    switch (process.env.NODE_ENV) {

        case "local":
            return {
                DB: env.DB.LOCAL,
            };

        case "dev":
            return {
                DB: env.DB.DEV,
            };

        case "production":
            return {
                DB: env.DB.PROD,

            };

        default:
            return {
                DB: env.DB.LOCAL,
            };
    }
};