const { Client } = require("yuuko");
const typedefs = require('../typedef')

/**
 * 
 * @param {typedefs.Packet} packet 
 * @param {Client} client 
 */
module.exports.run = async (packet, client) => {
  const guild = client.guilds.get('746291190009430049')
  const member = guild.members.get(packet.d.member.user.id)
  const pingRoles = {
    giveaway_ping_1: '747036001238777899',
    announcement_ping_1: '747036376611946646',
    youtube_ping_1: '747036828581757008',
    customname_ping_1: '747037611134156861',
    events_ping_1: '755026916641079316',
    polls_ping_2: '763409000867430410',
    botUpdates_ping_2: '807666850144976947',
    partnership_ping_2: '808030891996741652'
  }

  let hasRoles = []
  for (pingRole in pingRoles) {
    if (member.roles.includes(pingRoles[pingRole])) {
      hasRoles.push('yay')
    }
  }

  /**
   * @type {typedefs.Component[]}
   */
  let pingsMsgComponents1 = []
  /**
   * @type {typedefs.Component[]}
   */
  let pingsMsgComponents2 = []

  for (let i = 0; i < 5; i++) {
    let nameStrings = [Object.keys(pingRoles)[i].split('_')[0], Object.keys(pingRoles)[i].split('_')[1]]
    pingsMsgComponents1.push({
      type: 2,
      style: member.roles.includes(pingRoles[Object.keys(pingRoles)[i]]) ? 1 : 2,
      label: `${nameStrings[0][0].toUpperCase()}${nameStrings[0].slice(1)} Ping`,
      custom_id: Object.keys(pingRoles)[i],
    })
  }
  for (let i = 5; i < 9; i++) {
    if (i == 8) {
        pingsMsgComponents2.push({
        type: 2,
        style: 4,
        label: 'Remove All',
        custom_id: 'remove_pings',
        disabled: hasRoles.length > 0 ? false : true
      })
    } else {
      let nameStrings = [Object.keys(pingRoles)[i].split('_')[0], Object.keys(pingRoles)[i].split('_')[1]]
      pingsMsgComponents2.push({
        type: 2,
        style: member.roles.includes(pingRoles[Object.keys(pingRoles)[i]]) ? 1 : 2,
        label: `${nameStrings[0][0].toUpperCase()}${nameStrings[0].slice(1)} Ping`,
        custom_id: Object.keys(pingRoles)[i],
      })
    }
  }

  if (packet.d.data.custom_id === 'ping_autorole') {
    await client.replyInteraction(packet.d.id, packet.d.token, {
      type: 4,
      token: client.token,
      data: {
        content: 'Choose which pings you want!',
        flags: 64,
        /**
         * @type {typedefs.Component[]}
         */
        components: [
          {
            type: 1,
            components: pingsMsgComponents1
          }, {
            type: 1,
            components: pingsMsgComponents2
          }
        ]
      }
    })
  } else {
    console.log(packet.d.data.custom_id)
    if (!Object.keys(pingRoles).includes(packet.d.data.custom_id) && !packet.d.data.custom_id === 'remove_pings') return
    if (packet.d.data.custom_id === 'remove_pings') {
      const previousButton1 = pingsMsgComponents1;
      const previousButton2 = pingsMsgComponents2;
      for (let i = 0; i < pingsMsgComponents1.length; i++) {
        pingsMsgComponents1[i] = {
          type: 2,
          style: 2,
          label: previousButton1[i].label,
          custom_id: previousButton1[i].custom_id
        }
      }

      for (let i = 0; i < pingsMsgComponents2.length; i++) {
        if (i == 3) {
          pingsMsgComponents2[i] = {
            type: 2,
            style: 4,
            label: previousButton2[i].label,
            custom_id: previousButton2[i].custom_id,
            disabled: true
          }
        } else {
          pingsMsgComponents2[i] = {
            type: 2,
            style: 2,
            label: previousButton2[i].label,
            custom_id: previousButton2[i].custom_id
          }
        }
      }

      for (role in pingRoles) {
        member.removeRole(pingRoles[role])
      }
      console.log(pingsMsgComponents1)
    } else if (packet.d.data.custom_id.endsWith('1')) {
      const index = pingsMsgComponents1.map(e => e.custom_id).indexOf(packet.d.data.custom_id);
      const previousButton = pingsMsgComponents1[index]
      pingsMsgComponents1[index] = {
        type: 2,
        style: previousButton.style === 1 ? 2 : 1,
        label: previousButton.label,
        custom_id: packet.d.data.custom_id
      }
      if (previousButton.style == 1) {
        member.removeRole(pingRoles[packet.d.data.custom_id])
      } else {
        member.addRole(pingRoles[packet.d.data.custom_id])
      }
    } else {
      const index = pingsMsgComponents2.map(e => e.custom_id).indexOf(packet.d.data.custom_id);
      const previousButton = pingsMsgComponents2[index];
      pingsMsgComponents2[index] = {
        type: 2,
        style: previousButton.style === 1 ? 2 : 1,
        label: previousButton.label,
        custom_id: packet.d.data.custom_id
      }
      if (previousButton.style == 1) {
        member.removeRole(pingRoles[packet.d.data.custom_id])
      } else {
        member.addRole(pingRoles[packet.d.data.custom_id])
      }
    }
    await client.replyInteraction(packet.d.id, packet.d.token, {
      type: 7,
      token: client.token,
      data: {
        content: 'Choose which pings you want!',
        flags: 64,
        /**
         * @type {typedefs.Component[]}
         */
        components: [
          {
            type: 1,
            components: pingsMsgComponents1
          }, {
            type: 1,
            components: pingsMsgComponents2
          }
        ]
      }
    })
  }
}