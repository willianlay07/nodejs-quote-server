import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Enter the description"],
      trim: true,
    },
    bywho: {
      type: String,
      required: [true, "Enter the by who"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
