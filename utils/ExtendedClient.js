const Eris = require("eris");
const axios = require('axios');
const typedef = require('../typedef')

module.exports = {
  /**
  * @param {Eris.Client} client
  */
  extendClient: () => {
    /**
     * @function replyInteraction
     * @param {string} interactionId 
     * @param {string} interactionToken 
     * @param {{
     * type: 1 | 4 | 5 | 6 | 7,
     * token: string,
     * data: {
     * content: string,
     * flags: 0 | 64,
     * components: typedef.Component
     * }
     * }} options
     */
    Eris.Client.prototype.replyInteraction = async (interactionId, interactionToken, options = {}) => {
      axios({
        method: "POST",
        url: `https://discord.com/api/v9/interactions/${interactionId}/${interactionToken}/callback`,
        data: {
          type: options.type,
          data: options.data
        },
        headers: {
          Authorization: `Bot ${options.token}`,
          "Content-Type": "application/json"
        }
      }).then(res => res)
    }
  }
}