const avatarsUpdate = require("../../models/users");

const avatars =  async(req, res, next) => {
    const user = await avatarsUpdate(req.user.token, req.file);
    res.status(200).send(user);
  }
module.exports = avatars;