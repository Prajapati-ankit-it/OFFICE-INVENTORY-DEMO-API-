require('dotenv').config()

const envConstants = {

    ENVIRONMENT: process.env.ENVIRONMENT,
    PRIVATE_AUTH_SECRET: process.env.PRIVATE_AUTH_SECRET,
   
    DB: {

        LOCAL: {
            name: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },

        DEV: {
            name: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },

        PROD: {
            name: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },

    },


};

export { envConstants }