import { ComponentInteraction } from "./ComponentInteraction";
import { Client } from "./Client";
export interface ComponentEventFn {
    (interaction: ComponentInteraction, client: Client): Promise<void> | void;
}
export interface ComponentEventReqs {
    custom?(interaction: ComponentInteraction, client: Client): Promise<boolean> | boolean;
}
export default class ComponentEvent {
    name: string;
    fn: ComponentEventFn;
    reqs: ComponentEventReqs;
    constructor(name: string, fn: ComponentEventFn, reqs?: ComponentEventReqs);
    checkPermissions(interaction: ComponentInteraction, client: Client): Promise<boolean>;
    execute(interaction: ComponentInteraction, client: Client): Promise<boolean>;
    private _enoughReqs;
}
