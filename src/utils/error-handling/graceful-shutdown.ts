function closeServerAndExit() {
  console.log('Server closed');
  process.exit(0);
}

// Graceful shutdown
export function handleGracefulShutdown(server: any, signal: any) {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(closeServerAndExit);
}
