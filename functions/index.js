const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTqe4H4KI9HL4fYIF3Ev0TiSKLAWttlqdwfIAQ9TpqnZ9cxmSVkqCMJWOgjRBUkQNA5eLVVORkGa3kOzGAIPMHT00J7pKqIB7"
);

// API

// App config
const app = express();

// Middlewaes
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM ! for amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Submits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example of endpoint
// http://localhost:5001/e-clone-1409a/us-central1/api
