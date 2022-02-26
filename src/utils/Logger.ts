import { Client } from "./Client";
import chalk from "chalk";

export class Logger {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  error(message: string): void {
    console.log(chalk.red("[ERROR] ") + message);
  }

  info(message: string): void {
    console.log(chalk.grey("[INFO] ") + message);
  }

  warn(message: string): void {
    console.log(chalk.yellow("[WARN] " + message));
  }
}
