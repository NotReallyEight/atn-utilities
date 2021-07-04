const { EventListener } = require('yuuko')
const axios = require('axios')

module.exports = new EventListener('rawWS', (packet, id, ctx) => {
  if (packet.t !== 'INTERACTION_CREATE') return
  if (packet.d.type !== 3) return

  const guild = ctx.client.guilds.get('746291190009430049')
  const member = guild.members.get(packet.d.member.user.id)
  if (packet.d.data.custom_id === 'ping_autorole') {
    axios({
      method: "POST",
      url: `https://discord.com/api/v9/interactions/${packet.d.id}/${packet.d.token}/callback`,
      data: {
        type: 4,
        data: {
          content: 'Choose which pings you want!',
          flags: 64,
          components: [
            {
              type: 1,
              components: [
                {
                  type: 2,
                  style: member.roles.includes('747035318112223273') ? 1 : 2,
                  label: 'All Pings',
                  disabled: false,
                  custom_id: 'all_pings_autorole'
                }, {
                  type: 2,
                  style: member.roles.includes('747036001238777899') ? 1 : 2,
                  label: 'Giveaway Ping',
                  disabled: false,
                  custom_id: 'giveaway_ping_autorole'
                }, {
                  type: 2,
                  style: member.roles.includes('747036376611946646') ? 1 : 2,
                  label: 'Announcement Ping',
                  disabled: false,
                  custom_id: 'announcement_ping_autorole'
                }, {
                  type: 2,
                  style: member.roles.includes('747036828581757008') ? 1 : 2,
                  label: 'YouTube Ping',
                  disabled: false,
                  custom_id: 'youtube_ping_autorole'
                },{
                  type: 2,
                  style: member.roles.includes('747037611134156861') ? 1 : 2,
                  label: 'CustomName Ping',
                  disabled: false,
                  custom_id: 'customname_ping_autorole'
                }
              ]
            }, {
              type: 1,
              components: [
                {
                  type: 2,
                  style: member.roles.includes('755026916641079316') ? 1 : 2,
                  label: 'Events Ping',
                  disabled: false,
                  custom_id: 'events_ping_autorole'
                },{
                  type: 2,
                  style: member.roles.includes('763409000867430410') ? 1 : 2,
                  label: 'Polls Ping',
                  disabled: false,
                  custom_id: 'polls_ping_autorole'
                },{
                  type: 2,
                  style: member.roles.includes('807666850144976947') ? 1 : 2,
                  label: 'Bot Updates Ping',
                  disabled: false,
                  custom_id: 'bot_updates_ping_autorole'
                },{
                  type: 2,
                  style: member.roles.includes('808030891996741652') ? 1 : 2,
                  label: 'Partnership Ping',
                  disabled: false,
                  custom_id: 'partnership_ping_autorole'
                }, {
                  type: 2,
                  style: 4,
                  label: 'Remove All',
                  disabled: false,
                  custom_id: 'remove_all_autorole'
                }
              ]
            }
          ]
        }
      },
      headers: {
        Authorization: `Bot ${ctx.client.token}`,
        "Content-Type": "application/json"
      }
    }).then(res => res)
  } else if (packet.d.data.custom_id === 'gender_autorole') {

  } else {
    return
  }
})