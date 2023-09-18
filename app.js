import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import quoteRouter from "./route/quote.js";
import cors from "cors";

dotenv.config({
  path: "./config.env",
});
//console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to accept incoming

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/quote", quoteRouter);

export { app };
