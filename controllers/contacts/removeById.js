const removeContact = require("../../models/contact");

const removeById =  async (req, res) => {
    const { contactId } = req.params;
    const isRemove = await removeContact(contactId);
    if (!isRemove) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ message: "contact deleted" });
  };

  module.exports = removeById;
