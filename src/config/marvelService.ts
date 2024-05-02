import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    baseURL: 'https://developer.marvel.com/app'
}
