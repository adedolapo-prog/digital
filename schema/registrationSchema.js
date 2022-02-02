const mongoose = require("mongoose")
const registrationSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    bestHeadline: {
      type: String,
      required: true,
    },
    hashtags: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

const registration = mongoose.model(
  "Registration",
  registrationSchema,
  "registration"
)

module.exports = { Registration: registration }
