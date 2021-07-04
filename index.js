const { Client } = require('yuuko')
const config = require('./config')

const bot = new Client({
  token: config.token,
  restMode: true,
  allowMention: true,
  caseSensitiveCommands: false,
  caseSensitivePrefix: false,
  prefix: 'atn!'
})

bot.addDir('events')

bot.addDir('commands')

bot.connect()