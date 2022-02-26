const { EventListener } = require("yuuko");

module.exports = new EventListener('ready', () => {
  console.log('Ready')
})