import { config } from "dotenv";

config();

export default {
  GuildID: process.env.GUILD_ID!,
  Token: process.env.TOKEN!,
};
