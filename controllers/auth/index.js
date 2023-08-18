const getCurrent = require("./getCurrent");
const avatars = require("./avatars");
const logout = require("./logout");
const login = require ("./login");
const signup = require("./signup");
const verificationToken = require("./verificationToken");
const verificationSecondUser = require ("./verificationSecondUser");

module.exports = {
    getCurrent,
    avatars,
    logout,
    login,
    signup,
    verificationToken,
    verificationSecondUser,
}