import Eris from "eris";
import { Command } from "./Command";
import { ApplicationCommandOptions, SlashCommand } from "./SlashCommand";
import { SlashInteraction } from "./SlashInteraction";
import ComponentEvent from "./ComponentEvent";
import { Logger } from "./Logger";
export interface ClientOptions extends Eris.ClientOptions {
    prefix: string;
    token: string;
}
export interface CreateSlashCommandOptions {
    id?: string;
    name: string;
    description: string;
    options?: ApplicationCommandOptions[];
    default_permission?: boolean;
}
export declare class Client extends Eris.Client {
    token: string;
    prefix: string;
    commands: Command[];
    slashCommands: SlashCommand[];
    componentEvents: ComponentEvent[];
    logger: Logger;
    constructor(options: ClientOptions);
    mentionPrefixRegExp(): RegExp;
    addEvents(path: string): this;
    addInteractionEvents(path: string): this;
    addCommands(path: string): this;
    addSlashCommands(path: string): Promise<this>;
    getPrefixesForMessage(): Promise<string[]>;
    splitPrefixFromContent(message: Eris.Message): Promise<[string, string] | null>;
    hasCommand(message: Eris.Message): Promise<[string, string, ...string[]] | null>;
    processCommand(message: any): Promise<boolean>;
    processSlashCommand(interaction: SlashInteraction): Promise<boolean>;
    hasSlashCommand(name: string): Promise<boolean>;
    createSlashCommand(options: CreateSlashCommandOptions): Promise<this>;
    wait(milliseconds: number): Promise<unknown>;
    addComponentEvents(path: string): Promise<this>;
    getSlashCommands(): Promise<CreateSlashCommandOptions[] | void>;
}
