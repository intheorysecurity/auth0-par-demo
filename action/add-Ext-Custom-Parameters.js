// onExecutePostLogin is a hook that runs after a user successfully logs in
exports.onExecutePostLogin = async (event, api) => {
    
  // 'event' contains information about the login transaction, including query parameters from the request
  // 'api' provides methods to modify the authentication process, including modifying the access token
  
  // The 'setCustomClaim' method is used to add a custom claim to the issued access token.
  // In this case, we're adding a claim called 'ext-custom-parameter' with the value retrieved
  // from the query string of the login request (event.request.query).
  api.accessToken.setCustomClaim(
      'ext-custom-parameter',  // The name of the custom claim to add
      event.request.query["ext-custom-parameter"] // The value of the custom claim, taken from the request query
  );
};
