const getHashTags = (string) => {
  let stringArr = string.split(" ")

  stringArr = stringArr.map((str) => {
    return str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
  })

  stringArr = stringArr
    .sort(function (a, b) {
      return b.length - a.length
    })
    .slice(0, 3)
    .map((str) => `#${str.toLowerCase()}`)
  return stringArr
}

module.exports = { getHashTags }
