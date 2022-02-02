const router = require("express").Router()
const {
  registrationController,
} = require("../controllers/registrationController")

router.post("/registration", registrationController)

module.exports = router
