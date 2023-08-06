const currentUser = require("../../models/users");

const getCurrent = async (req, res, next) => {
    const user = await currentUser(req.user.token);
    res.status(200).send(user);
  };
  module.exports = getCurrent;