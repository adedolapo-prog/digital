const { registrationService } = require("../services/registrationService")

const registrationController = async (req, res) => {
  try {
    const result = await registrationService(req.body)
    return res.status(200).json({ success: true, data: result })
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message })
  }
}

module.exports = { registrationController }
