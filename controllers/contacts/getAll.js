const listContacts = require("../../models/contact");

const getAll =  async (req, res, next) => {
    const contact = await listContacts();

    res.status(200).json(contact);
  }

  module.exports = getAll;