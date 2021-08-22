import { Client } from "./Client";
import { SlashInteraction } from "./SlashInteraction";
export interface SlashCommandReqs {
    custom?(interaction: SlashInteraction, client: Client): boolean | Promise<boolean>;
}
export interface CommandFn {
    (interaction: SlashInteraction, client: Client): Promise<void> | void;
}
export interface ApplicationCommandOptions {
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    name: string;
    description: string;
    required?: boolean;
    choices?: ApplicationCommandOptionChoice[];
    options?: ApplicationCommandOptions;
}
export interface ApplicationCommandOptionChoice {
    name: string;
    value: string | number;
}
export interface CommandOptions {
    description: string;
    options?: ApplicationCommandOptions[];
    default_permission?: boolean;
}
export declare class SlashCommand {
    name: string;
    description: string;
    fn: CommandFn;
    reqs: SlashCommandReqs;
    options?: CommandOptions;
    constructor(name: string, fn: CommandFn, reqs?: SlashCommandReqs, options?: CommandOptions);
    checkPermissions(interaction: SlashInteraction, client: Client): Promise<boolean>;
    execute(interaction: SlashInteraction, client: Client): Promise<boolean>;
}
