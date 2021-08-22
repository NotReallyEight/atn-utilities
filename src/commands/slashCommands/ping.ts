import { SlashCommand } from "../../utils/SlashCommand";

export default new SlashCommand(
  "ping",
  (interaction, client) => {
    interaction.reply(
      `Pong! My latency is \`${Date.now() - interaction.createdAt}\``,
      client
    );
  },
  undefined,
  {
    description: "Get the latency of the bot.",
    default_permission: true,
  }
);
