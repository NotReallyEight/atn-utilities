const { Client } = require('yuuko');
const config = require('./config');
const { extendClient } = require('./utils/ExtendedClient')

const bot = new Client({
  token: config.token,
  restMode: true,
  allowMention: true,
  caseSensitiveCommands: false,
  caseSensitivePrefix: false,
  prefix: 'atn!'
});

bot.addDir('events');

bot.addDir('commands');

extendClient()

bot.editStatus('online', {
  name: 'https://notreallyeight.tk/discord',
  type: 3
})

bot.connect();