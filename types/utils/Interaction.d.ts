import Eris from "eris";
import { Client } from "./Client";
export interface Member {
    user: User;
    nick?: string;
    roles: string[];
    joined_at: Date;
    premium_since?: Date;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
}
export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot: boolean;
    system: boolean;
    mfa_enabled: boolean;
    locale: string;
    verified: boolean;
    email: boolean;
    flags: number;
    premium_type: 0 | 1 | 2;
    public_flags: number;
}
export interface InteractionDataOptions {
    name: string;
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    value?: string;
    options?: InteractionDataOptions[];
}
export interface InteractionPacketD {
    version: number;
    token: string;
    id: string;
    application_id: string;
    type: 1 | 2 | 3;
    guild_id: string;
    channel_id: string;
    member: Member;
    data?: any;
}
export interface InteractionResponse {
    data: InteractionApplicationCommandCallbackDataStructure;
}
export interface InteractionApplicationCommandCallbackDataStructure {
    tts?: boolean;
    content?: string;
    embeds?: Eris.Embed[];
    allowed_mentions?: Eris.AllowedMentions;
    flags?: 0 | 64;
    components?: MessageComponent[];
}
export interface MessageComponent {
    type: 1 | 2 | 3;
    custom_id?: string;
    disabled?: boolean;
    style?: 1 | 2 | 3 | 4 | 5;
    label?: string;
    emoji?: Eris.PartialEmoji;
    url?: string;
    options?: SelectOption[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    components?: MessageComponent[];
}
export interface SelectOption {
    label: string;
    value: string;
    description?: string;
    emoji?: Eris.PartialEmoji;
    default?: boolean;
}
export declare class Interaction extends Eris.Base {
    version: number;
    token: string;
    id: string;
    applicationId: string;
    type: 1 | 2 | 3;
    guildId: string;
    channelId: string;
    member: Member;
    user: User;
    data: any | undefined;
    constructor(data: InteractionPacketD);
    reply(options: InteractionResponse | string, client: Client): Promise<void>;
    ephemeralReply(options: InteractionResponse | string, client: Client): Promise<void>;
    deferUpdate(options: InteractionResponse | string, client: Client): Promise<void>;
    deferWithSource(options?: InteractionResponse | string, client?: Client): Promise<void>;
    followUp(options: InteractionResponse | string, client: Client): Promise<void>;
}
