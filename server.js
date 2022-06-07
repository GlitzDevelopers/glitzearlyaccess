const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config({ path: __dirname + "/variables.env" });

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const mc_list_id = process.env.LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// serve static files from React App
// app.use(express.static(path.join(__dirname, "glitz_prelauch/build")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// set api endpoint
app.get("/api/memberAdd", (req, res) => {
  mailchimp
    .post("/lists/c6b7992d29/members/", {
      email_address: req.query.email,
      status: "subscribed",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);
