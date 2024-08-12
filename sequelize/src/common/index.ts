import { Response } from "express"
import { apiConstants } from '../constant/api'
import { ApiResponse } from "../interface/index"
const bcrypt = require("bcrypt")

const sendSuccessMessage = (res: Response, data: any, message: string) => {
    const response: ApiResponse = {
        statusCode: apiConstants.SUCCESS_STATUS_CODE,
        message: message,
        data: data || {}
    };
    res.status(apiConstants.SUCCESS_STATUS_CODE).send(response);
}

const sendErrorMessage = (res: Response, error: any) => {
    let message = error.message;
    if (error.isJoi) {
        message = error.details[0].message;
    }

    const response: ApiResponse = {
        statusCode: apiConstants.ERROR_STATUS_CODE,
        message: message
    }
    res.status(apiConstants.ERROR_STATUS_CODE).send(response);
}

const verifyPayload = async (request: any, requestSchema: any) => {
    try {
        const value = await requestSchema.validateAsync(request);
        return value;
    } catch (error) {
        throw error;
    }
}

const generateRandomStr = () => {
    return (Math.random() + 1).toString(36).substring(7)
}

const hashPassword = async (plaintextPassword: string) => {
    const hash = await bcrypt.hash(plaintextPassword, 15);
    return hash
}


export { sendSuccessMessage, sendErrorMessage, verifyPayload, generateRandomStr, hashPassword}