const signupUser = require("../../models/users");

const signup = async (req, res, next) => {
    const user = await signupUser(req.body);
    res.status(201).json({
      contentType: "application/json",
      ResponseBody: { user },
    });
  };

  module.exports = signup;