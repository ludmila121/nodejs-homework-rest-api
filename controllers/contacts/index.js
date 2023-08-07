const getAll = require("./getAll.js");
const getById = require ("./getById.js");
const add = require ("./add.js");
const removeById = require("./removeById.js");
const updateById = require("./updateById.js");
const updateStatusContact = require("./updateStatusContact.js");
const updateContactId = require ("./updateContact.js");

module.exports = {
    getAll,
    getById,
    add,
    removeById,
    updateById,
    updateStatusContact,
    updateContactId,
}