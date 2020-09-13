const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  ///key
);

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.options('*', cors());
//app.use(cors({credentials: true, origin: true}));
//app.use(cors({ origin: true }));
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})*/
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request Recieved rrrr!!!, for this amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total), // decimals may mess up the function
    currency: "usd",
  });
  console.log('this is payment intent'+paymentIntent)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command
exports.api = functions.https.onRequest(app);
