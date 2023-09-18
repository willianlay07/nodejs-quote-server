import Quote from "../model/quote.js";

// Check incoming data;
const checkBody = (req, res, next) => {
  if (!req.body.description || !req.body.bywho) {
    return res.status(400).json({
      status: "failure",
      message: "Missing parameter",
    });
  }

  next();
};

// Read All;
const getAllQuote = async (req, res) => {
  try {
    const quote = await Quote.find({});

    res.status(200).json({
      status: "success",
      message: "",
      results: quote.length,
      data: quote,
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: "Something went wrong! Please try again!",
    });
  }
};

// Create
const createQuote = async (req, res) => {
  try {
    const newQuote = await Quote.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        quote: newQuote,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: "Invalid data sent!",
    });
  }
};

export { checkBody, getAllQuote, createQuote };
