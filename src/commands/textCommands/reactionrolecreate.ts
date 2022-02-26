import { Command } from "../../utils/Command";

export default new Command(['reactionrolecreate', 'rrr'], (message, _args, client) => {
  client.newCreateMessage(message.channel.id, {
    embeds: [
      {
        title: "Auto Roles",
        description: "Click the buttons below to get roles!"
      }
    ],
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 1,
            label: "Ping Roles",
            custom_id: 'ping_autorole',
            disabled: false
          }, {
            type: 2,
            style: 3,
            label: "Pronouns Roles",
            custom_id: "pronouns_autorole",
            disabled: false
          }, {
            type: 2,
              style: 1,
              label: 'Other Roles',
              custom_id: 'others_autorole',
              disabled: false
          }
        ]
      }
    ]
  })
}, {
  custom: (message) => {
    if (message.author.id !== "489031280147693568") {
      message.channel.createMessage('You cannot use this command.')
      return false
    } else {
      return true
    }
  }
})