const express = require("express");
const app = require("../server");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (req.oidc.isAuthenticated() && !req.oidc.accessToken.isExpired()) {
      // res.send({
      //   isAuthN: req.oidc.isAuthenticated(),
      //   accessToken: req.oidc.accessToken.access_token,
      //   idToken: req.oidc.idToken,
      // });
      res.render("pages/index", {
        isAuthN: req.oidc.isAuthenticated(),
        accessToken: req.oidc.accessToken.access_token,
        idToken: req.oidc.idToken,
        user: req.oidc.user
      });
    } else {
      //currently redirect to the login page
      res.render("pages/index", {
        isAuthN: false,
        accessToken: null,
        idToken: null,
        user: null
      });
    }
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});

module.exports = router;
