const verificationSecondUser = async (req, res, next) => {
    const result = await verificationSecondUser(req.body)

    if (result) {
      res.status (200).json({ message: "Verification email send"});
    } else {
      res.status(400).json({ message: "Verification has already been passed"});
    }
  };

  module.exports = verificationSecondUser;