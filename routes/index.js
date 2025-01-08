const express = require("express");
const app = require("../server");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log(req.oidc.config);
    if (req.oidc.isAuthenticated() && !req.oidc.accessToken.isExpired()) {
      res.send({
        accessToken: req.oidc.accessToken.access_token,
        idToken: req.oidc.idToken,
      });
    } else {
      //currently redirect to the login page
      res.redirect("/login");
    }
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});


module.exports = router