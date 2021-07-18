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

  const pronounRoles = {
    0: '755124915430097076',
    1: '755125098687758538',
    2: '864144820724695040'
  }

  /**
   * @type {typedefs.Component[]}
   */
   let pingsMsgComponents1 = []
   /**
    * @type {typedefs.Component[]}
    */
   let pingsMsgComponents2 = []
 
   /**
    * @type {typedefs.Component}
    */
   let pronounsSelects;

   /**
    * @type {typedefs.Component}
    */
   let otherAutorole = {
    type: 2,
    custom_id: 'anime_autorole',
    disabled: false,
    style: member.roles.includes('746778226801770496') ? 4 : 2,
    label: 'Animesss',
    emoji: member.roles.includes('746778226801770496') ? {
      name: 'zx_tick_yes',
      animated: false,
      id: '843780958943838218'
    } : undefined,
   }

  let hasRoles = []
  for (pingRole in pingRoles) {
    let nameStrings = [pingRole.split('_')[0], pingRole.split('_')[1]]
    if (member.roles.includes(pingRoles[pingRole])) {
      hasRoles.push('yay')
      if (pingRole.endsWith('1')) {
        pingsMsgComponents1.push({
          type: 2,
          style: 1,
          label: `${nameStrings[0][0].toUpperCase()}${nameStrings[0].slice(1)} Ping`,
          custom_id: pingRole,
          emoji: {
            name: 'zx_tick_yes',
            animated: false,
            id: '843780958943838218'
          }
        })
      } else if (pingRole.endsWith('2')) {
        pingsMsgComponents2.push({
          type: 2,
          style: 1,
          label: `${nameStrings[0][0].toUpperCase()}${nameStrings[0].slice(1)} Ping`,
          custom_id: pingRole,
          emoji: {
            name: 'zx_tick_yes',
            animated: false,
            id: '843780958943838218'
          }
        })
      }
    } else {
      if (pingRole.endsWith('1')) {
        pingsMsgComponents1.push({
          type: 2,
          style: 2,
          label: `${nameStrings[0][0].toUpperCase()}${nameStrings[0].slice(1)} Ping`,
          custom_id: pingRole,
          emoji: undefined
        })
      } else if (pingRole.endsWith('2')) {
        pingsMsgComponents2.push({
          type: 2,
          style: 2,
          label: `${nameStrings[0][0].toUpperCase()}${nameStrings[0].slice(1)} Ping`,
          custom_id: pingRole,
          emoji: undefined
        })
      }
    }
  }

  pingsMsgComponents2.push({
    type: 2,
    style: 4,
    label: 'Remove All',
    custom_id: 'remove_pings',
    disabled: hasRoles.length > 0 ? false : true
  })

  pronounsSelects = {
    type: 3,
    custom_id: 'pronoun_role_select',
    options: [
      {
        label: 'He/Him',
        value: 'him',
        default: member.roles.includes('755124915430097076') ? true : false
      }, {
        label: 'She/Her',
        value: 'her',
        default: member.roles.includes('755125098687758538') ? true : false
      }, {
        label: 'Others',
        value: 'others',
        default: member.roles.includes('864144820724695040') ? true : false
      }
    ],
    placeholder: "Select a role!",
    max_values: 1,
    min_values: 0
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
  } else if (packet.d.data.custom_id !== 'ping_autorole' && packet.d.data.custom_id !== 'pronouns_autorole' && packet.d.data.custom_id !== 'pronoun_role_select' && packet.d.data.custom_id !== 'others_autorole') {
    if (!Object.keys(pingRoles).includes(packet.d.data.custom_id) && !packet.d.data.custom_id === 'remove_pings' && !packet.d.data.custom_id === 'anime_autorole') return
    if (packet.d.data.custom_id === 'remove_pings') {
      const previousButton1 = pingsMsgComponents1;
      const previousButton2 = pingsMsgComponents2;
      for (let i = 0; i < pingsMsgComponents1.length; i++) {
        pingsMsgComponents1[i] = {
          type: 2,
          style: 2,
          label: previousButton1[i].label,
          custom_id: previousButton1[i].custom_id,
          emoji: undefined
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
            custom_id: previousButton2[i].custom_id,
            emoji: undefined
          }
        }
      }

      for (role in pingRoles) {
        member.removeRole(pingRoles[role])
      }
    } else if (packet.d.data.custom_id.endsWith('1')) {
      const index = pingsMsgComponents1.map(e => e.custom_id).indexOf(packet.d.data.custom_id);
      const previousButton = pingsMsgComponents1[index]
      pingsMsgComponents1[index] = {
        type: 2,
        style: previousButton.style === 1 ? 2 : 1,
        label: previousButton.label,
        custom_id: packet.d.data.custom_id,
        emoji: previousButton.style === 2 ? {
          name: 'zx_tick_yes',
          animated: false,
          id: '843780958943838218'
        } : undefined
      }
      if (previousButton.style == 1) {
        member.removeRole(pingRoles[packet.d.data.custom_id])
      } else {
        member.addRole(pingRoles[packet.d.data.custom_id])
      }
    } else if (packet.d.data.custom_id === 'anime_autorole') {
      if (member.roles.includes('746778226801770496')) {
        otherAutorole.style = 2
        otherAutorole.emoji = undefined
        member.removeRole('746778226801770496')
        
        client.replyInteraction(packet.d.id, packet.d.token, {
          type: 7,
          token: client.token,
          data: {
            content: 'Click below to add/remove the Anime role!',
            flags: 64,
            components: [
              {
                type: 1,
                components: [
                  otherAutorole
                ]
              }
            ]
          }
        })
        return
      } else {
        otherAutorole.style = 4
        otherAutorole.emoji = {
          name: 'zx_tick_yes',
          animated: false,
          id: '843780958943838218'
        }
        member.addRole('746778226801770496')
        client.replyInteraction(packet.d.id, packet.d.token, {
          type: 7,
          token: client.token,
          data: {
            content: 'Click below to add/remove the Anime role!',
            flags: 64,
            components: [
              {
                type: 1,
                components: [
                  otherAutorole
                ]
              }
            ]
          }
        })
        return
      }
    } else {
      const index = pingsMsgComponents2.map(e => e.custom_id).indexOf(packet.d.data.custom_id);
      const previousButton = pingsMsgComponents2[index];
      pingsMsgComponents2[index] = {
        type: 2,
        style: previousButton.style === 1 ? 2 : 1,
        label: previousButton.label,
        custom_id: packet.d.data.custom_id,
        emoji: previousButton.style === 2 ? {
          name: 'zx_tick_yes',
          animated: false,
          id: '843780958943838218'
        } : undefined
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
  } else if (packet.d.data.custom_id === 'pronouns_autorole') {
    /**
     * @type {string[]}
     */
    let pronounRole = []
    for (pronoun in pronounRoles) {
      if (member.roles.includes(pronounRoles[pronoun])) {
        pronounRole.push('yay')
      }
    }
    
    await client.replyInteraction(packet.d.id, packet.d.token, {
      type: 4,
      token: client.token,
      data: {
        /**
         * @type {string}
         */
        content: 'Choose your pronoun!',
        /**
         * @type {0 | 64}
         */
        flags: 64,
        /**
         * @type {typedefs.Component[]}
         */
        components: [
          {
            type: 1,
            components: [
              pronounsSelects
            ]
          }
        ]
      }
    })
  } else if (packet.d.data.custom_id === 'pronoun_role_select') {
    for (let i = 0; i < 3; i++) {
      if (pronounsSelects.options[i].default) {
        pronounsSelects.options[i].default = false
        member.removeRole(pronounRoles[i])
      } else if (pronounsSelects.options[i].value === packet.d.data.values[0]) {
        pronounsSelects.options[i].default = true
        member.addRole(pronounRoles[i])
      }
    }

    await client.replyInteraction(packet.d.id, packet.d.token, {
      type: 7,
      token: client.token,
      data: {
        /**
         * @type {string}
         */
        content: 'Choose your pronoun!',
        /**
         * @type {0 | 64}
         */
        flags: 64,
        /**
         * @type {typedefs.Component[]}
         */
        components: [
          {
            type: 1,
            components: [
              pronounsSelects
            ]
          }
        ]
      }
    })
  } else if (packet.d.data.custom_id === 'others_autorole') {
    await client.replyInteraction(packet.d.id, packet.d.token, {
      type: 4,
      token: client.token,
      data: {
        content: 'Click below to add/remove the Anime role!',
        flags: 64,
        components: [
          {
            type: 1,
            components: [
              otherAutorole
            ]
          }
        ]
      }
    })
  }
}