const { Command } = require('yuuko')
const axios = require('axios')

module.exports = new Command('rrc', (message, args, ctx) => {
  axios({
    method: "POST",
    url: `https://discord.com/api/v9/channels/${message.channel.id}/messages`,
    data: {
      embeds: [
        {
          title: 'Auto Roles',
          type: 'rich',
          description: 'Click the buttons below to get roles!'
        }
      ],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 1,
              label: 'Ping Roles',
              custom_id: 'ping_autorole',
              disabled: false
            }, {
              type: 2,
              style: 3,
              label: 'Gender Roles',
              custom_id: 'gender_autorole',
              disabled: false
            }
          ]
        }
      ]
    },
    headers: {
      "Authorization": `Bot ${ctx.client.token}`,
      "Content-Type": "application/json"
    }
  }).then(res => res)
}, {
  owner: true
})