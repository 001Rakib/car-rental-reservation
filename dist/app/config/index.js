"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    node_env: process.env.NODE_ENV,
    bcrypt_round_salt: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_token: process.env.JWT_ACCESS_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_token: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expired_in: process.env.JWT_REFRESH_EXPIRES_IN,
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    payment_url: process.env.PAYMENT_URL,
};
