const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//handlng uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server duw to uncaught exception`);
  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/.env" });
const port = process.env.PORT || 5099;

//database
connectDatabase();

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
