import { Client } from "./Client";
export declare class Logger {
    client: Client;
    constructor(client: Client);
    error(message: string): void;
    info(message: string): void;
}
