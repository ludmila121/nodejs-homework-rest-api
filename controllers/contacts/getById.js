const getContactById = require("../../models/contact");

const getById =  async (req, res) => {
    const { contactId } = req.params;
    const contactById = await getContactById(contactId);
    if (!contactById) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json(contactById);
  };

  module.exports = getById;