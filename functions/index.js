const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQFg7DiIXn6aDZ5fhzDJPOZSrbLMjCkz7X9uheQxj8sDPXOWBZp2sBhYDhr74Z5LLFliuehy7gk6feKqKFqXuQS00e6Yk8FMk"
);

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request Recieved rrrr!!!, for this amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log('this is payment intent'+paymentIntent)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command
exports.api = functions.https.onRequest(app);
