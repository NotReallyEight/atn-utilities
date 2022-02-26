const { Command } = require('yuuko')

module.exports = new Command('reload', async (message, args, ctx) => {
  await ctx.client.reloadFiles()
  await message.channel.createMessage('Reloaded commands.')
}, {
  owner: true
})