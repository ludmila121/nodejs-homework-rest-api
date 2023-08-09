 const verificationToken =   async (req, res, next) => {
    const user = await verificationUser(req.params.verificationToken);
    res.status(200).json({message: "Verification successful", user});
  };

  module.exports = verificationToken;