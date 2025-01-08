const express = require("express");
const router = express.Router();
var axios = require("axios");
const jwt = require("jsonwebtoken");
const fs = require("node:fs");
const { createPrivateKey } = require("node:crypto");


// NOTE: Custom parameters must have the 'ext-' prefix to be accepted as extension parameters by Auth0.
// In this example, we're adding a custom parameter named 'ext-custom-parameter' with the value 'customValue'.
// You can add up to 10 such custom parameters to the request.
var customParams = {
  "ext-custom-parameter": "customValue"
}

var authParams = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_uri: `${process.env.BASE_URL}callback`,
  audience: process.env.AUDIENCE,
  scope: process.env.SCOPE,
  response_type: "code",
  ...customParams
};

router.get("/", async (req, res) => {
  var requestURI = await getParRequest(authParams);
  console.log(requestURI);

  res.redirect(
    `https://${process.env.AUTH0_DOMAIN}/authorize?client_id=${process.env.CLIENT_ID}&request_uri=${requestURI.request_uri}`
  );
});

async function getParRequest(params) {
  if(process.env.useMTLS){
    url = `https://mtls.${process.env.AUTH0_DOMAIN}/oauth/par`
  }
  else {
    url = `https://${process.env.AUTH0_DOMAIN}/oauth/par`
  }
  var options = {
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: params,
  };

  var results = await axios(options);

  return results.data;
}

async function getJARRequest(params) {}

module.exports = router;
