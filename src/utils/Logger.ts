import chalk from "chalk";

export default {
	/**
	 * Logs an error message in the console
	 * @param message - The error message to log
	 */
	error: (message: string): void => {
		console.log(chalk.bold.red("[ERROR] ") + message);
	},
	/**
	 * Logs an info message in the console
	 * @param message - The info message to log
	 */
	info: (message: string): void => {
		console.log(chalk.bold.green("[INFO]  ") + message);
	},
};
