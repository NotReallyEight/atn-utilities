const { EventListener } = require('yuuko')
const axios = require('axios')

module.exports = new EventListener('rawWS', async (packet, id, ctx) => {
  if (packet.t === 'INTERACTION_CREATE' && packet.d.type === 3) {
    require('../customEvents/buttonClick').run(packet, ctx.client)
  }

  // const guild = ctx.client.guilds.get('746291190009430049')
  // const member = guild.members.get(packet.d.member.user.id)
  // const pingRoles = [
  //   '747035318112223273',
  //   '747036001238777899',
  //   '747036376611946646',
  //   '747036828581757008',
  //   '747037611134156861',
  //   '755026916641079316',
  //   '763409000867430410',
  //   '772141547747541002',
  //   '807666850144976947',
  //   '808030891996741652'
  // ]
  // let hasRoles
  // pingRoles.forEach(r => {
  //   if (member.roles.includes(r)) {
  //     hasRoles = true
  //     return
  //   }
  // })

  // switch(packet.d.data.custom_id) {
  //   case 'ping_autorole':
  //     axios({
  //       method: "POST",
  //       url: `https://discord.com/api/v9/interactions/${packet.d.id}/${packet.d.token}/callback`,
  //       data: {
  //         type: 4,
  //         data: {
  //           content: 'Choose which pings you want!',
  //           flags: 64,
  //           components: [
  //             {
  //               type: 1,
  //               components: [
  //                 {
  //                   type: 2,
  //                   style: member.roles.includes('747036001238777899') ? 1 : 2,
  //                   label: 'Giveaway Ping',
  //                   disabled: false,
  //                   custom_id: 'giveaway_ping_autorole'
  //                 }, {
  //                   type: 2,
  //                   style: member.roles.includes('747036376611946646') ? 1 : 2,
  //                   label: 'Announcement Ping',
  //                   disabled: false,
  //                   custom_id: 'announcement_ping_autorole'
  //                 }, {
  //                   type: 2,
  //                   style: member.roles.includes('747036828581757008') ? 1 : 2,
  //                   label: 'YouTube Ping',
  //                   disabled: false,
  //                   custom_id: 'youtube_ping_autorole'
  //                 },{
  //                   type: 2,
  //                   style: member.roles.includes('747037611134156861') ? 1 : 2,
  //                   label: 'CustomName Ping',
  //                   disabled: false,
  //                   custom_id: 'customname_ping_autorole'
  //                 }
  //               ]
  //             }, {
  //               type: 1,
  //               components: [
  //                 {
  //                   type: 2,
  //                   style: member.roles.includes('755026916641079316') ? 1 : 2,
  //                   label: 'Events Ping',
  //                   disabled: false,
  //                   custom_id: 'events_ping_autorole'
  //                 },{
  //                   type: 2,
  //                   style: member.roles.includes('763409000867430410') ? 1 : 2,
  //                   label: 'Polls Ping',
  //                   disabled: false,
  //                   custom_id: 'polls_ping_autorole'
  //                 },{
  //                   type: 2,
  //                   style: member.roles.includes('807666850144976947') ? 1 : 2,
  //                   label: 'Bot Updates Ping',
  //                   disabled: false,
  //                   custom_id: 'bot_updates_ping_autorole'
  //                 },{
  //                   type: 2,
  //                   style: member.roles.includes('808030891996741652') ? 1 : 2,
  //                   label: 'Partnership Ping',
  //                   disabled: false,
  //                   custom_id: 'partnership_ping_autorole'
  //                 }, {
  //                   type: 2,
  //                   style: 4,
  //                   label: 'Remove All',
  //                   disabled: hasRoles ? true : false,
  //                   custom_id: 'remove_all_autorole'
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       },
  //       headers: {
  //         Authorization: `Bot ${ctx.client.token}`,
  //         "Content-Type": "application/json"
  //       }
  //     }).then(res => res)
  //     break;
  //   case 'giveaway_ping_autorole':
  //     if (member.roles.includes('747036001238777899')) {
  //       await member.removeRole('747036001238777899')
  //       await axios({
  //         method: "POST",
  //         url: `https://discord.com/api/v9/interactions/${packet.d.id}/${packet.d.token}/callback`,
  //         data: {
  //           type: 7,
  //           data: {
  //             content: 'Choose which pings you want!',
  //             flags: 64,
  //             components: [
  //               {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: 2,
  //                     label: 'Giveaway Ping',
  //                     disabled: false,
  //                     custom_id: 'giveaway_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: member.roles.includes('747036376611946646') ? 1 : 2,
  //                     label: 'Announcement Ping',
  //                     disabled: false,
  //                     custom_id: 'announcement_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: member.roles.includes('747036828581757008') ? 1 : 2,
  //                     label: 'YouTube Ping',
  //                     disabled: false,
  //                     custom_id: 'youtube_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('747037611134156861') ? 1 : 2,
  //                     label: 'CustomName Ping',
  //                     disabled: false,
  //                     custom_id: 'customname_ping_autorole'
  //                   }
  //                 ]
  //               }, {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: member.roles.includes('755026916641079316') ? 1 : 2,
  //                     label: 'Events Ping',
  //                     disabled: false,
  //                     custom_id: 'events_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('763409000867430410') ? 1 : 2,
  //                     label: 'Polls Ping',
  //                     disabled: false,
  //                     custom_id: 'polls_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('807666850144976947') ? 1 : 2,
  //                     label: 'Bot Updates Ping',
  //                     disabled: false,
  //                     custom_id: 'bot_updates_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('808030891996741652') ? 1 : 2,
  //                     label: 'Partnership Ping',
  //                     disabled: false,
  //                     custom_id: 'partnership_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: 4,
  //                     label: 'Remove All',
  //                     disabled: hasRoles ? true : false,
  //                     custom_id: 'remove_all_autorole'
  //                   }
  //                 ]
  //               }
  //             ]
  //           }
  //         },
  //         headers: {
  //           Authorization: `Bot ${ctx.client.token}`,
  //           "Content-Type": "application/json"
  //         }
  //       }).then(res => res)
  //     } else {
  //       await member.addRole('747036001238777899')
  //       await axios({
  //         method: "POST",
  //         url: `https://discord.com/api/v9/interactions/${packet.d.id}/${packet.d.token}/callback`,
  //         data: {
  //           type: 7,
  //           data: {
  //             content: 'Choose which pings you want!',
  //             flags: 64,
  //             components: [
  //               {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: 1,
  //                     label: 'Giveaway Ping',
  //                     disabled: false,
  //                     custom_id: 'giveaway_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: member.roles.includes('747036376611946646') ? 1 : 2,
  //                     label: 'Announcement Ping',
  //                     disabled: false,
  //                     custom_id: 'announcement_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: member.roles.includes('747036828581757008') ? 1 : 2,
  //                     label: 'YouTube Ping',
  //                     disabled: false,
  //                     custom_id: 'youtube_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('747037611134156861') ? 1 : 2,
  //                     label: 'CustomName Ping',
  //                     disabled: false,
  //                     custom_id: 'customname_ping_autorole'
  //                   }
  //                 ]
  //               }, {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: member.roles.includes('755026916641079316') ? 1 : 2,
  //                     label: 'Events Ping',
  //                     disabled: false,
  //                     custom_id: 'events_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('763409000867430410') ? 1 : 2,
  //                     label: 'Polls Ping',
  //                     disabled: false,
  //                     custom_id: 'polls_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('807666850144976947') ? 1 : 2,
  //                     label: 'Bot Updates Ping',
  //                     disabled: false,
  //                     custom_id: 'bot_updates_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('808030891996741652') ? 1 : 2,
  //                     label: 'Partnership Ping',
  //                     disabled: false,
  //                     custom_id: 'partnership_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: 4,
  //                     label: 'Remove All',
  //                     disabled: hasRoles ? true : false,
  //                     custom_id: 'remove_all_autorole'
  //                   }
  //                 ]
  //               }
  //             ]
  //           }
  //         },
  //         headers: {
  //           Authorization: `Bot ${ctx.client.token}`,
  //           "Content-Type": "application/json"
  //         }
  //       }).then(res => res)
  //     }
  //     break;
  //   case 'announcement_ping_autorole':
  //     if (member.roles.includes('747036376611946646')) {
  //       await member.removeRole('747036376611946646')
  //       await axios({
  //         method: "POST",
  //         url: `https://discord.com/api/v9/interactions/${packet.d.id}/${packet.d.token}/callback`,
  //         data: {
  //           type: 7,
  //           data: {
  //             content: 'Choose which pings you want!',
  //             flags: 64,
  //             components: [
  //               {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: member.roles.includes('747036001238777899') ? 1 : 2,
  //                     label: 'Giveaway Ping',
  //                     disabled: false,
  //                     custom_id: 'giveaway_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: 2,
  //                     label: 'Announcement Ping',
  //                     disabled: false,
  //                     custom_id: 'announcement_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: member.roles.includes('747036828581757008') ? 1 : 2,
  //                     label: 'YouTube Ping',
  //                     disabled: false,
  //                     custom_id: 'youtube_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('747037611134156861') ? 1 : 2,
  //                     label: 'CustomName Ping',
  //                     disabled: false,
  //                     custom_id: 'customname_ping_autorole'
  //                   }
  //                 ]
  //               }, {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: member.roles.includes('755026916641079316') ? 1 : 2,
  //                     label: 'Events Ping',
  //                     disabled: false,
  //                     custom_id: 'events_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('763409000867430410') ? 1 : 2,
  //                     label: 'Polls Ping',
  //                     disabled: false,
  //                     custom_id: 'polls_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('807666850144976947') ? 1 : 2,
  //                     label: 'Bot Updates Ping',
  //                     disabled: false,
  //                     custom_id: 'bot_updates_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('808030891996741652') ? 1 : 2,
  //                     label: 'Partnership Ping',
  //                     disabled: false,
  //                     custom_id: 'partnership_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: 4,
  //                     label: 'Remove All',
  //                     disabled: hasRoles ? true : false,
  //                     custom_id: 'remove_all_autorole'
  //                   }
  //                 ]
  //               }
  //             ]
  //           }
  //         },
  //         headers: {
  //           Authorization: `Bot ${ctx.client.token}`,
  //           "Content-Type": "application/json"
  //         }
  //       }).then(res => res)
  //     } else {
  //       await member.addRole('747036376611946646')
  //       await axios({
  //         method: "POST",
  //         url: `https://discord.com/api/v9/interactions/${packet.d.id}/${packet.d.token}/callback`,
  //         data: {
  //           type: 7,
  //           data: {
  //             content: 'Choose which pings you want!',
  //             flags: 64,
  //             components: [
  //               {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: member.roles.includes('747036001238777899') ? 1 : 2,
  //                     label: 'Giveaway Ping',
  //                     disabled: false,
  //                     custom_id: 'giveaway_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: 1,
  //                     label: 'Announcement Ping',
  //                     disabled: false,
  //                     custom_id: 'announcement_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: member.roles.includes('747036828581757008') ? 1 : 2,
  //                     label: 'YouTube Ping',
  //                     disabled: false,
  //                     custom_id: 'youtube_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('747037611134156861') ? 1 : 2,
  //                     label: 'CustomName Ping',
  //                     disabled: false,
  //                     custom_id: 'customname_ping_autorole'
  //                   }
  //                 ]
  //               }, {
  //                 type: 1,
  //                 components: [
  //                   {
  //                     type: 2,
  //                     style: member.roles.includes('755026916641079316') ? 1 : 2,
  //                     label: 'Events Ping',
  //                     disabled: false,
  //                     custom_id: 'events_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('763409000867430410') ? 1 : 2,
  //                     label: 'Polls Ping',
  //                     disabled: false,
  //                     custom_id: 'polls_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('807666850144976947') ? 1 : 2,
  //                     label: 'Bot Updates Ping',
  //                     disabled: false,
  //                     custom_id: 'bot_updates_ping_autorole'
  //                   },{
  //                     type: 2,
  //                     style: member.roles.includes('808030891996741652') ? 1 : 2,
  //                     label: 'Partnership Ping',
  //                     disabled: false,
  //                     custom_id: 'partnership_ping_autorole'
  //                   }, {
  //                     type: 2,
  //                     style: 4,
  //                     label: 'Remove All',
  //                     disabled: hasRoles ? true : false,
  //                     custom_id: 'remove_all_autorole'
  //                   }
  //                 ]
  //               }
  //             ]
  //           }
  //         },
  //         headers: {
  //           Authorization: `Bot ${ctx.client.token}`,
  //           "Content-Type": "application/json"
  //         }
  //       }).then(res => res)
  //     }
  //     break
  //   default:
  //     return
  // }
})