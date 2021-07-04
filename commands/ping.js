const { Command } = require("yuuko");

module.exports = new Command('ping', async (message) => {
  const latency = Date.now() - message.createdAt
  await message.channel.createMessage(`Pong! My latency is ${latency}ms.`)
})