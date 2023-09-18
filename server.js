import mongoose from "mongoose";
import { app } from "./app.js";

// Mongoose Connection -- START;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });
// Mongoose Connection -- END;

//console.log(process.env.NODE_ENV);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
