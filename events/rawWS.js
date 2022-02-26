const { EventListener } = require('yuuko')
const axios = require('axios')

module.exports = new EventListener('rawWS', async (packet, id, ctx) => {
  if (packet.t === 'INTERACTION_CREATE' && packet.d.type === 3) {
    require('../customEvents/componentInteraction').run(packet, ctx.client)
  }
})