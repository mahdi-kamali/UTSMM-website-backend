
require("dotenv").config();



// JWT Token 
const accessToken = process.env.ACCESS_TOKEN_SECRET


// Stripe
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY


// SMM_STORE.com Config
const SMM_STORE_API_KEY = process.env.SMM_STORE_API_KEY
const SMM_SOTRE_BASE_URL = process.env.SMM_SOTRE_BASE_URL


//  Cryptomous
const CRYPTOMUS_MERCHANT_ID = process.env.CRYPTOMUS_MARCHANT_ID
const CRYPTOMUS_BASE_URL = process.env.CRYPTOMUS_BASE_URL
const CRYPTOMUS_API_KEY = process.env.CRYPTOMUS_API_KEY

// SMTP 
const SMTP_EMAIL = process.env.SMTP_EMAIL
const SMTP_PASSWORD = process.env.SMTP_PASSWORD



const PERFECT_MONEY_BASE_URL = process.env.PERFECT_MONEY_BASE_URL
const PERFECT_MONEY_PAYEE_ACCOUNT = process.env.PERFECT_MONEY_PAYEE_ACCOUNT
const PERFECT_MONEY_PAYEE_NAME = process.env.PERFECT_MONEY_PAYEE_NAME
const PERFECT_MONEY_PAYMENT_UNITS = process.env.PERFECT_MONEY_PAYMENT_UNITS




module.exports = {
    accessToken,
    STRIPE_SECRET_KEY,
    SMM_STORE: {
        API_KEY: SMM_STORE_API_KEY,
        BASE_URL: SMM_SOTRE_BASE_URL,
    },
    CRYPTOMUS: {
        MERCHANT_ID: CRYPTOMUS_MERCHANT_ID,
        BASE_URl: CRYPTOMUS_BASE_URL,
        API_KEY: CRYPTOMUS_API_KEY
    },
    PERFECT_MONEY : {
        PERFECT_MONEY_BASE_URL ,
        PERFECT_MONEY_PAYEE_ACCOUNT,
        PERFECT_MONEY_PAYEE_NAME ,
        PERFECT_MONEY_PAYMENT_UNITS
    },
    SMTP: {
        EMAIL: SMTP_EMAIL,
        PASSWORD: SMTP_PASSWORD
    }
}
