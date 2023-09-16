import { app } from "./app";
import { initDatabase } from "./services/database/database.config";
import { port } from "./config/config";
import { SUCCESS_MESSAGES } from "./constants/success.constants";
import { ERROR_MESSAGES } from "./constants/error.constants";
import { SERVER_EVENTS } from "./constants/utils.constants";

(async () => {
  try {
    await initDatabase();
    console.log(SUCCESS_MESSAGES.BD_CONNECTED);
  } catch (e: any) {
    throw new Error(e);
  }
})();

const server = app.listen(port, () =>
  console.log(`${SUCCESS_MESSAGES.SERVER_CONECTED} ${port}`)
);

server.on(SERVER_EVENTS.ERROR, (e) =>
  console.error(`${ERROR_MESSAGES.SERVER_FAIL} ${e}`)
);
