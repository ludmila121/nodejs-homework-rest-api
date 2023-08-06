const updateContact= require("../../models/contact");

const updateContactId =  async (req, res) => {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const updateContactItem = await updateContact(contactId, {
      favorite,
    });
    if (!updateContactItem) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ status: "success", updateContactItem });
  };

  module.exports = updateContactId;