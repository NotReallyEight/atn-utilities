import type Eris from "eris";
import type { Client } from "./utils";

/**
 * The function to be called when a command is ran
 * @param message - The message of the command
 * @param args - The arguments of the command
 * @param client - The client instance
 */
export type CommandFn = (
	message: Eris.Message,
	args: string[],
	client: Client
) => Promise<void> | void;

/**
 * The options to pass in the constructor
 */
export interface CommandConstructorOptions {
	/**
	 * The command function
	 */
	fn: CommandFn;
	/**
	 * The command names
	 */
	names: string[] | string;
	/**
	 * The options of the command
	 */
	options?: CommandOptions;
	/**
	 * The requirements of the command
	 */
	requirements?: CommandRequirements;
}

/**
 * The options of a command
 */
export interface CommandOptions {
	/**
	 * The description of a command
	 */
	description?: string;
	/**
	 * The expected arguments of a command
	 */
	expectedArguments?: string;
}

/**
 * The requirements to be fulfilled before running the command function
 */
export interface CommandRequirements {
	/**
	 * A custom command requirement
	 * @param message - The message of the command
	 * @param args - The arguments of the command
	 * @param client - The client instance
	 * @returns Whether the requirement is fulfilled
	 */
	custom?: (
		message: Eris.Message,
		args: string[],
		client: Client
	) => Promise<boolean> | boolean;
}
