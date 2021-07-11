const Eris = require('eris')

/**
 * @typedef Packet
 * @property {string} t
 * @property {number} op
 * @property {{
 * version: number,
 * type: number,
 * token: string,
 * message: {
 * type: number,
 * tts: boolean,
 * timestamp: string,
 * pinned: boolean,
 * mentions: [],
 * mention_roles: [],
 * mention_everyone: boolean,
 * id: string,
 * flags: 0 | 64,
 * embeds: Eris.EmbedOptions[],
 * edited_timestamp: string,
 * content: string,
 * components: [],
 * channel_id: string,
 * author: Eris.User,
 * attachments: []
 * },
 * member: {
 * user: Eris.User,
 * roles: [],
 * premium_since: string,
 * permissions: string,
 * pending: boolean,
 * nick: string,
 * mute: boolean,
 * joined_at: string,
 * is_pending: boolean,
 * deaf: boolean,
 * avatar: null
 * },
 * id: string,
 * guild_id: string,
 * data: {
 * custom_id: string,
 * component_type: 1 | 2
 * },
 * channel_id: string,
 * application_id: string
 * }} d
 */

/**
 * @typedef Role
 * @property {string} id
 * @property {string} name
 * @property {number} color
 * @property {boolean} hoist
 * @property {number} position
 * @property {string} permissions
 * @property {boolean} managed
 * @property {boolean} mentionable
 * @property {RoleTags} [tags]
 */

/**
 * @typedef Component
 * @property {1 | 2 | 3} type
 * @property {1 | 2 | 3 | 4 | 5} [style]
 * @property {string} [label]
 * @property {{
 * id: string,
 * name: string,
 * roles?: Role[],
 * user?: User,
 * require_colons?: boolean,
 * managed?: boolean,
 * animated?: boolean,
 * available?: boolean
 * }} [emoji]
 * @property {string} [custom_id]
 * @property {string} [url]
 * @property {boolean} [disabled]
 * @property {Component} [components]
 */

/**
 * @typedef InteractionReplyOptions
 * @property 
 */

/**
 * @typedef RoleTags
 * @property {string} [bot_id]
 * @property {string} [integration_id]
 * @property {null} [premium_subscriber]
 */

/**
 * @typedef User
 * @property {string} id
 * @property {string} username
 * @property {string} discriminator
 * @property {string} avatar
 * @property {boolean} [bot]
 * @property {boolean} [system]
 * @property {boolean} [mfa_enabled]
 * @property {string} [locale]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {number} [flags]
 * @property {0 | 1 | 2} [premium_type]
 * @property {number} [public_flags]
 */

module.exports.unused = {}