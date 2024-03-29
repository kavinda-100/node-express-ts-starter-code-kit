import express from "express";

import {MessageResponse} from "../types";
import hello from "./hello.router";

const router = express.Router();

// api/v1 home route
router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Root API - { api/v1/ }",
  });
});

// api/v1/ other route
router.use("/hello", hello);

export default router;
