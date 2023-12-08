const {createHash} = require('crypto')

const hash = (text) => {
  return createHash("sha256").update(text).digest("base32")
}

console.log(hash("password"))
console.log(hash("password"))
console.log(hash("hi there") === hash("hi there"))

