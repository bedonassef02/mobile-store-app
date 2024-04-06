"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_config_1 = require("./config/database.config");
const graceful_shutdown_1 = require("./utils/error-handling/graceful-shutdown");
process.loadEnvFile('./.env');
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_config_1.connectToDatabase)();
    const app = (0, app_1.setupExpressApp)();
    const port = parseInt(process.env.PORT + '') || 3000;
    const server = app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
    // Attach event listeners for SIGINT and SIGTERM signals
    process.on('SIGINT', () => (0, graceful_shutdown_1.handleGracefulShutdown)(server, 'SIGINT'));
    process.on('SIGTERM', () => (0, graceful_shutdown_1.handleGracefulShutdown)(server, 'SIGTERM'));
});
startApp().catch((err) => {
    console.error('Failed to start the application:', err);
    process.exit(1);
});
