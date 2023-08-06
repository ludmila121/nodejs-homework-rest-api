const express = require("express");
const { catchErrors } = require("../../middlewares/catchErrors");
const ctrl = require("../../controllers/contacts");
const {
  fullPostValidation,
  patchValidation,
  patchStatusValidation,
} = require("../../middlewares/validationBody");
const router = express.Router();


router.get(
  "/",
  catchErrors(ctrl.getAll)
);

router.get(
  "/:contactId",
  catchErrors(ctrl.getById)
);

router.post(
  "/",
  fullPostValidation,
  catchErrors(ctrl.add)
);

router.delete(
  "/:contactId",
  catchErrors(ctrl.removeById)
);

router.put(
  "/:contactId",
  fullPostValidation,
  catchErrors(ctrl.updateById)
);

router.patch(
  "/:contactId",
  patchValidation,
  catchErrors(ctrl.updateStatusContact)
);

router.patch(
  "/:contactId/favorite",
  patchStatusValidation,
  catchErrors(ctrl.updateContactId)
);

module.exports = router;