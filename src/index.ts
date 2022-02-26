import { Client } from "./utils/Client";
import config from "./config";
import path from "path";

const client = new Client({
  prefix: "atn!",
  token: config.Token,
  allowedMentions: {
    everyone: false,
    roles: false,
    users: false,
  },
  autoreconnect: true,
  getAllUsers: true,
  intents: 4095,
});

client.addEvents(path.join(__dirname, "events", "normalEvents"));

client.addInteractionEvents(
  path.join(__dirname, "events", "interactionEvents")
);

// client.addComponentEvents(path.join(__dirname, "events", "componentEvents"));

client.addCommands(path.join(__dirname, "commands", "textCommands"));

client.addSlashCommands(path.join(__dirname, "commands", "slashCommands"));

client.connect();
