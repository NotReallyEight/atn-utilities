import type {
	CommandConstructorOptions,
	CommandFn,
	CommandRequirements,
} from "../types";
import Logger from "./Logger";
import type Eris from "eris";
import type { Client } from ".";

/**
 * The command class
 */
export class Command {
	/**
	 * The description of the command
	 */
	description?: string;
	/**
	 * The expected arguments of the command
	 */
	expectedArguments?: string;
	/**
	 * The function to be called when a command is ran
	 */
	fn: CommandFn;
	/**
	 * The command's names / aliases
	 */
	names: string[];
	/**
	 * The requirements of a command to be fulfilled before running the command function
	 */
	requirements: CommandRequirements;

	/**
	 * @param options - The options of the command
	 */
	constructor(options: CommandConstructorOptions) {
		this.names = Array.isArray(options.names) ? options.names : [options.names];

		if (!this.names[0]) Logger.error("At least one command name is required.");

		this.fn = options.fn;
		this.requirements = {};
		this.requirements.custom =
			options.requirements?.custom !== undefined
				? options.requirements.custom
				: undefined;

		this.description =
			options.options?.description !== undefined
				? options.options.description
				: undefined;

		this.expectedArguments =
			options.options?.expectedArguments !== undefined
				? options.options.expectedArguments
				: undefined;
	}

	/**
	 * Checks the permissions of a command
	 * @param message - The message of the command
	 * @param args - The arguments of the command
	 * @param client - The client instance
	 * @returns Whether the command fulfills the requirements
	 */
	public async checkPermissions(
		message: Eris.Message,
		args: string[],
		client: Client
	): Promise<boolean> {
		return this.enoughRequirements(this.requirements, message, args, client);
	}

	/**
	 * Executes the command
	 * @param message - The message of the command
	 * @param args - The arguments of the command
	 * @param client - The client instance
	 * @returns Whether the command fulfills the requirements
	 */
	public async execute(
		message: Eris.Message,
		args: string[],
		client: Client
	): Promise<boolean> {
		if (!(await this.checkPermissions(message, args, client))) return false;

		void this.fn(message, args, client);

		return true;
	}

	/**
	 * Checks if the command fulfills the requirements
	 * @param requirements - The requirements to be fulfilled before running the command function
	 * @param message - The message of the command
	 * @param args - The arguments of the command
	 * @param client - The client instance
	 * @returns Whether the requirements are fulfilled
	 */
	private async enoughRequirements(
		requirements: CommandRequirements,
		message: Eris.Message,
		args: string[],
		client: Client
	): Promise<boolean> {
		const { custom } = requirements;

		if (custom && !(await custom(message, args, client))) return false;

		return true;
	}
}
