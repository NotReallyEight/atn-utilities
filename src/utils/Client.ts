import Eris from "eris";
import type { Command, ComponentEvent } from ".";

/**
 * The extended client class
 */
export class Client extends Eris.Client {
	/**
	 * The text based commands array
	 */
	commands: Command[] = [];
	/**
	 * The component events array
	 */
	componentEvents: ComponentEvent[] = [];
}
