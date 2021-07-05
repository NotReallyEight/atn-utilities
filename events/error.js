const { EventListener } = require('yuuko')

module.exports = new EventListener('error', (err, id) => {
  console.log(`Error:\n${err}`)
})