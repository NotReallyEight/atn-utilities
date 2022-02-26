const { Command } = require("yuuko");

module.exports = new Command('rules', async (message, args, ctx) => {
  const rulesMessage = await message.channel.createMessage({
    embed: {
        description: '**WELCOME TO ATN SERVER!**\nATN Server is a friendly community server founded by the owner Eight!\n\nIn this server you can find support for every ATN Development\'s product, and hang out with the friendly members this server has!\nWe also offer custom bots made by us in this server which is amazing!\nWhat are you waiting for? Start chatting in <#746355946518741124> and start your journey!\n\nAs every single Discord server, this one also has some rules that you need to follow.\n\n**SERVER RULES**\n> Don\'t advertise in chats\n> Don\'t flood in the chats\n> Don\'t send NSFW content\n> Don\'t beg for any subscription such as Discord Nitro\n> Don\'t beg for any subscription such as Discord Nitro\n> Don\'t ask to get a promotion\n> Don\'t offend people\n> Don\'t use inappropriate nicknames\n> Don\'t discriminate for any kind of thing\n> Don\'t send too many lines in a single message\n> Don\'t send your or anyone else\'s personal information\n> Don\'t DM advertise\n> Use the right chats\n> Follow Discord ToS and Community Guidelines (https://discord.com/terms | https://discord.com/guidelines)\n> Use music bots correctly (Use them only to play music)\n\nHave you read all the rules? Click the reaction below!\n_Rules will change at any time so keep an eye out on this channel._',
    }
  })
  await rulesMessage.addReaction('zx_tick_yes:843780958943838218')
}, {
  owner: true
})