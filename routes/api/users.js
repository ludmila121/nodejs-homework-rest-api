const express = require("express");
const authorize = require("../../middlewares/authorize");
const ctrl = require("../../controllers/auth");
const {
  catchRegErrors,
  catchLogErrors,
  catchErrors,
} = require("../../middlewares/catchErrors");
const { postAuthValidation } = require("../../middlewares/validationBody");
const router = express.Router();  

const multer = require("multer");
const mime = require( "mime-types");
const uuid = require("uuid");
 const upload = multer({
  storage: multer.diskStorage({
    filename:(req, file, cb) => {
      const extname = mime.extension(file.mimetype);
      const filename = uuid.v4() + "." + extname;
      cb(null, filename);
    },
    destination: "./tmp",
  }),
 });

router.post(
  "/signup",
  postAuthValidation,
  catchRegErrors()
);
router.post(
  "/login",
  postAuthValidation,
  catchLogErrors(ctrl.login)
);

router.get(
  "/logout",
  authorize,
  catchErrors(ctrl.logout)
);

router.get(
  "/current",
  authorize,
  catchErrors(ctrl.getCurrent)
);
router.patch(
  "/avatars",
  authorize,
  upload.single("avatar"),
  catchErrors(ctrl.avatars)
  );

module.exports = router;