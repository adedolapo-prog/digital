const { Registration } = require("../schema/registrationSchema")
const { getHashTags } = require("../utils")

const registrationService = async (body) => {
  try {
    //getting the hashed tags using the getHashTags function
    let hashtags = await getHashTags(body.bestHeadline)

    //instantiating a new registration object
    const newRegistration = new Registration({ ...body, hashtags })
    await newRegistration.save()
    return newRegistration
  } catch (err) {
    throw err
  }
}

module.exports = { registrationService }
