import express from "express";
import cors from "cors";

import itemRoutes from "./routes/itemRoutes.js";
import mongoose from "mongoose";

const app = express();
app.use(cors({}));
app.use(express.json())

app.use("/items", itemRoutes);

mongoose
  .connect('mongodb+srv://dinuka:dinuka1234@cluster0.7o6t5.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    app.listen(process.env.PORT || 5000);
    console.log('started')
  })
  .catch((err) => {
    console.log(err);
  });


