import type { ComponentInteraction } from "eris";
import type {
	ComponentEventFn,
	ComponentEventOptions,
	ComponentEventRequirements,
} from "../types";
import type { Client } from "./Client";

/**
 * The component event class
 */
export class ComponentEvent {
	/**
	 * The function to be called when the component event is triggered
	 */
	fn: ComponentEventFn;
	/**
	 * The custom ID of the component
	 */
	id: string;
	/**
	 * The requirements to be fulfilled before running the component event function
	 */
	requirements: ComponentEventRequirements;
	/**
	 * @param options - The options of the component event
	 */
	constructor(options: ComponentEventOptions) {
		this.id = options.id;
		this.fn = options.fn;
		this.requirements = options.requirements ?? {};
	}

	/**
	 * Checks whether the user that triggered the component event has the required permissions
	 * @param interaction - The interaction of the component event
	 * @param client - The client instance
	 * @returns Whether the user that triggered the component event has the required permissions
	 */
	async checkPermissions(
		interaction: ComponentInteraction,
		client: Client
	): Promise<boolean> {
		return this.enoughRequirements(this.requirements, interaction, client);
	}

	/**
	 * Execute a component event function
	 * @param interaction - The interaction of the component event
	 * @param client - The client instance
	 * @returns Whether the component event function has been executed
	 */
	async execute(
		interaction: ComponentInteraction,
		client: Client
	): Promise<boolean> {
		if (!(await this.checkPermissions(interaction, client))) return false;

		void this.fn(interaction, client);

		return true;
	}

	/**
	 * Checks whether the user that triggered the component event has the required permissions
	 * @param requirements - The requirements to be fulfilled before running the component event function
	 * @param interaction - The interaction of the component event
	 * @param client - The client instance
	 * @returns - Whether the user that triggered the component event has the required permissions
	 */
	private async enoughRequirements(
		requirements: ComponentEventRequirements,
		interaction: ComponentInteraction,
		client: Client
	): Promise<boolean> {
		const { custom } = requirements;

		if (custom && !(await custom(interaction, client))) return false;

		return true;
	}
}
