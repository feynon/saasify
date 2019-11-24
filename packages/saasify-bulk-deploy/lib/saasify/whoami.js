'use strict'

const parseJson = require('parse-json')
const saasify = require('./saasify')

module.exports = async (opts = {}) => {
  const result = await saasify('whoami', [], {
    ...opts,
    pipe: false
  })

  console.log(result)

  return parseJson(result)
}
