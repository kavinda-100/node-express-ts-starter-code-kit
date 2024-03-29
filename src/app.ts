import express from "express";
import {MessageResponse} from "./types";
import routes from "./routes";
import * as middlewares from "./middlewares";

const app = express();

app.use(express.json());

// Home route
app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Node.js + Express + TypeScript API Starter Code Kit",
  });
});

// API routes
app.use("/api/v1", routes);

// Error handling (404 and 500) 
//(must be the after all routes keep this at the end of the file)
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
