import { Interaction, InteractionPacketD, InteractionDataOptions } from "./Interaction";
export interface SlashInteractionData {
    id?: string;
    name?: string;
    options?: InteractionDataOptions[];
}
export declare class SlashInteraction extends Interaction {
    data: SlashInteractionData;
    constructor(data: InteractionPacketD);
}
