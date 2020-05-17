//Using bodyParser as helper for webhook
const bodyParser = require('body-parser');

//using fs to write to a file
const fs = require('fs');

//helper function that saves successfull payments
function appendToFile(filename, json) {
  fs.appendFile(filename, JSON.stringify(json) + ",\n", function (err) {
    if (err) throw err;
    console.log('Savedto' + filename + '!');
  });
}

const express = require("express");
const app = express();
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_jRc73lEA2TGeuZM5H8Dg28ml0050RGh7jF");

app.use(express.static("."));
app.use(express.json());

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1200;
};

//Code Snippet referenced in Friction Log
app.get("/", async (request, response) => {
  const path = resolve('checkout.html')
  response.sendFile(path)
});


app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});



//Implementing webhook to listen to successfull PaymentIntents
app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  let event;

  try {
    event = request.body;
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;

      //helper function to log the order to fulfill
      appendToFile('OrdersToFulfill.txt', event.data.object)


      console.log('PaymentIntent was successful!');
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!');
      break;
    // ... handle other event types
    default:
      // Unexpected event type
      return response.status(400).end();
  }

  // Return a 200 response to acknowledge receipt of the event
  response.json({received: true});
});


app.listen(4242, () => console.log('Node server listening on port 4242!'));
