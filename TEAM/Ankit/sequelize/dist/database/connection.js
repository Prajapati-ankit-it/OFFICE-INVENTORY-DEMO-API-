"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbCredentails = exports.sequelize = exports.connectDB = void 0;
const env = require('../config/env');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.DB.name, env.DB.user, env.DB.password, {
    host: env.DB.host,
    dialect: env.DB.dialect,
    logging: false,
    dialectOptions: {
        multipleStatements: true,
        connectTimeout: 150000
    },
    pool: {
        max: 350,
        min: 0,
        acquire: 220000,
        idle: 10000
    }
});
exports.sequelize = sequelize;
const connectDB = () => {
    sequelize.authenticate()
        .then(() => {
        sequelize.sync({ alter: false });
        console.log('Connection has been established successfully.');
    })
        .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
};
exports.connectDB = connectDB;
const dbCredentails = {
    username: env.DB.user,
    password: env.DB.password,
    database: env.DB.name,
    host: env.DB.host,
    dialect: env.DB.dialect,
    dialectOptions: {
        multipleStatements: true,
        connectTimeout: 60000
    },
};
exports.dbCredentails = dbCredentails;
