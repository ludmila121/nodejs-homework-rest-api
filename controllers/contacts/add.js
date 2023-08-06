const addContact = require("../../models/contact");

const add = async (req, res) => {
    const { name, email, phone, favorite } = req.body;
    const newContact = await addContact(name, email, phone, favorite);
    res.status(201).json({ status: "success", newContact });
  };

  module.exports = add;