const { CRYPTOMUS } = require("../lib/envAccess");
const CheckoutModel = require("../models/CheckoutModel");
const crypto = require("crypto");
const axios = require("axios");
async function checkoutWithCrpyomous(method, amount, user) {
  try {
    const checkout = await CheckoutModel({
      method: method,
      amount: amount,
      userID: user._id,
    });
    await checkout.save();

    const data = {
      amount: amount.total + "",
      currency: "usd",
      order_id: checkout._id,
    };

    const sign = crypto
      .createHash("md5")
      .update(
        Buffer.from(JSON.stringify(data)).toString("base64") + CRYPTOMUS.API_KEY
      )
      .digest("hex");

    const result = await axios.post(CRYPTOMUS.BASE_URl, data, {
      headers: {
        merchant: CRYPTOMUS.MERCHANT_ID,
        sign: sign,
      },
    });

    return {
      payMethod: "cryptomous",
      url: result.data.result.url,
      headers: {},
      body: {},
    };
  } catch (err) {
    throw err;
  }
}

module.exports = { checkoutWithCrpyomous };
