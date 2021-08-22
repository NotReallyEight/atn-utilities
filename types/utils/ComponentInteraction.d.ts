import { Interaction, InteractionPacketD } from "./Interaction";
export interface ComponentInteractionData {
    custom_id?: string;
    component_type?: number;
}
export declare class ComponentInteraction extends Interaction {
    data: ComponentInteractionData;
    constructor(data: InteractionPacketD);
}
