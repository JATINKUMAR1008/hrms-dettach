import express from "express";
import http from "http";
import "dotenv/config";
import { dbConnector } from "./connectors/db.connector";
import { v1Router } from "./routes/v1.routes";
export const app = express();
app.use(express.json());
async function init() {
  const httpServer = http.createServer(app);
  const PORT = process.env.PORT || 3200;
  dbConnector();
  app.use("/api/v1", v1Router);
  httpServer.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
}
init();
