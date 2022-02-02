const { Registration } = require("../schema/registrationSchema")
const { getHashTags } = require("../utils")

const registrationService = async (body) => {
  try {
    let hashtags = await getHashTags(body.bestHeadline)
    const newRegistration = new Registration({ ...body, hashtags })
    await newRegistration.save()
    return newRegistration
  } catch (err) {
    throw err
  }
}

module.exports = { registrationService }
