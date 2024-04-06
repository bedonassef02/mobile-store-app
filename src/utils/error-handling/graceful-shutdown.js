"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGracefulShutdown = void 0;
function closeServerAndExit() {
    console.log('Server closed');
    process.exit(0);
}
// Graceful shutdown
function handleGracefulShutdown(server, signal) {
    console.log(`Received ${signal}. Shutting down gracefully...`);
    server.close(closeServerAndExit);
}
exports.handleGracefulShutdown = handleGracefulShutdown;
