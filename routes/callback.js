const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET Callback Invoked");
  res.oidc.callback({
    redirectUri: `${process.env.BASE_URL}callback`,
    tokenEndpointParams: {
      grant_type: "authorization_code",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: req.query.code,
      redirect_uri: `${process.env.BASE_URL}callback`,
    },
  });
});

router.post(
  "/",
  express.urlencoded({ extended: false }),
  (req, res) => {
    console.log("POST Callback Invoked");
    res.oidc.callback({
      redirectUri: `${process.env.BASE_URL}callback`,
    });
  }
);

module.exports = router;
