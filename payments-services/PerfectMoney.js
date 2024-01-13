const { PERFECT_MONEY } = require("../lib/envAccess");
const CheckoutModel = require("../models/CheckoutModel");

async function checkoutWithPerfectMoney(method, user, amount) {
  const checkout = await CheckoutModel({
    method: method,
    amount: amount,
    userID: user._id,
  });
  await checkout.save();

  return {
    payMethod: "perfectmoney",
    url: PERFECT_MONEY.PERFECT_MONEY_BASE_URL,
    requestMethod: "POST",
    headers: {},
    body: {
      PAYEE_ACCOUNT: PERFECT_MONEY.PERFECT_MONEY_PAYEE_ACCOUNT,
      PAYEE_NAME: PERFECT_MONEY.PERFECT_MONEY_PAYEE_NAME,
      PAYMENT_AMOUNT: amount.total,
      PAYMENT_UNITS: PERFECT_MONEY.PERFECT_MONEY_PAYMENT_UNITS,
      STATUS_URL:
        "http://localhost:3001/api/payments-method/perfect-money-status",
      PAYMENT_URL:
        "http://localhost:3001/api/payments-method/perfect-money-status",
      NOPAYMENT_URL:
        "http://localhost:3001/api/payments-method/perfect-money-status",
      PAYMENT_ID: checkout._id,
    },
  };
}

module.exports = { checkoutWithPerfectMoney };
