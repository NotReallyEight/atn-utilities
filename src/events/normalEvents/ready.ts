import { Event } from "../../utils/Event";

export default new Event("ready", (client) => {
  client.logger.info("Ready!");
});
