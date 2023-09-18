import express from "express";

const quoteRouter = express.Router();

import {
  checkBody,
  getAllQuote,
  createQuote,
} from "../controller/quoteController.js";

quoteRouter.route("/").get(getAllQuote).post(checkBody, createQuote);

export default quoteRouter;
