const express = require("express");
const path = require("path");
const { request } = require("https");
const bodyParser = require("body-parser");

var app = express();
var mailchimpApiKey = "161e2bbe4e8b11cc30ae0839519eb1c7-us12";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", function (req, res) {
  request
    .post("https://us12.api.mailchimp.com/3.0/lists/c6b7992d29/members/")
    .set(
      "Content-Type",
      "application/json;charset=utf-8",
      "Access-Control-Allow-Origin",
      "*"
    )
    .set(
      "Authorization",
      "Basic " + new Buffer("any:" + mailchimpApiKey).toString("base64")
    )
    .send({
      email_address: req.body.email,
      status: "subscribed",
      merge_fields: {
        FNAME: req.body.firstName,
        LNAME: req.body.lastName,
      },
    })
    .end(function (err, response) {
      if (
        response.status < 300 ||
        (response.status === 400 && response.body.title === "Member Exists")
      ) {
        res.send("Signed Up!");
      } else {
        res.send("Sign Up Failed :(");
      }
    });
});

// set api endpoint
// app.get("/api/memberAdd", (req, res) => {
//   mailchimp
//     .post("/lists/c6b7992d29/members/", {
//       email_address: req.query.email,
//       status: "subscribed",
//       headers: {
//         "Access-Control-Allow-Headers": "Content-Type",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
//       },
//     })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);
