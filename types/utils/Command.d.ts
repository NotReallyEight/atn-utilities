import Eris from "eris";
import { Client } from "./Client";
export interface CommandReqs {
    custom?(msg: Eris.Message, args: string[], client: Client): boolean | Promise<boolean>;
}
export interface CommandFn<T extends Eris.Textable = Eris.TextableChannel> {
    (message: Eris.Message<T>, args: string[], client: Client): void;
}
export interface CommandOptions {
    description?: string;
    expectedArguments?: string;
}
export declare class Command {
    names: string[];
    fn: CommandFn;
    reqs: CommandReqs;
    description?: string;
    expectedArguments?: string;
    constructor(names: string | string[], fn: CommandFn, reqs?: CommandReqs, options?: CommandOptions);
    checkPermissions(message: Eris.Message, args: string[], client: Client): Promise<boolean>;
    execute(message: Eris.Message, args: string[], client: Client): Promise<boolean>;
}
