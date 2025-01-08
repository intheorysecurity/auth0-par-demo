const express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();
const { join } = require("path");
const { auth } = require("express-openid-connect");
const fs = require("node:fs");
const { createPrivateKey } = require("node:crypto");

const app = express();

var login = require("./routes/login");
var callback = require("./routes/callback");
var index = require("./routes/index");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "public")));

//Auth Config
const config = {
  routes: { callback: false, login: false },
  // authorizationParams: {
  //   response_type: "code",
  //   scope: "openid email profile address offline_access",
  // },
  //This needs to be updated for HEROKU
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  secret: process.env.SECRET,
  authRequired: false,
  attemptSilentLogin: true,
  auth0Logout: true,
};

app.use(auth(config));

app.use("/login", login);
app.use("/callback", callback);
app.use("/", index);

process.on("SIGINT", function () {
  process.exit();
});

module.exports = app;
