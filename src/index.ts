import { setupExpressApp } from "./app";
import { connectToDatabase } from "./config/database.config";
import {handleGracefulShutdown} from "./utils/error-handling/graceful-shutdown";

process.loadEnvFile('./.env');

const startApp = async () => {
  await connectToDatabase();

  const app = setupExpressApp();

  const port:number = parseInt(process.env.PORT + '') || 3000;

  const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  // Attach event listeners for SIGINT and SIGTERM signals
  process.on('SIGINT', () => handleGracefulShutdown(server, 'SIGINT'));
  process.on('SIGTERM', () => handleGracefulShutdown(server, 'SIGTERM'));
};

startApp().catch((err) => {
  console.error('Failed to start the application:', err);
  process.exit(1);
});
