const logoutUser = require("../../models/users")

const logout =  async (req, res, next) => {
    await logoutUser(req.user.token);
    res.sendStatus(204);
  };

module.exports = logout;  