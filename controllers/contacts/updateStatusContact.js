const updateContact = require("../../models/contact");

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    const { name, email, phone, favorite } = req.body;
    const updateContactItem = await updateContact(contactId, {
      name,
      email,
      phone,
      favorite,
    });
    if (!updateContactItem) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ status: "success", updateContactItem });
  };

  module.exports = updateStatusContact;