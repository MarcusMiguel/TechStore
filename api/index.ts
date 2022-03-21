const express = require("express");
const app = express();
import mongoose = require("mongoose");
import 'dotenv/config'
import productRoute from "./routes/product";
import authRoute from "./routes/auth";
import cartRoute from "./routes/cart";
import stripeRoute from "./routes/stripe";
import userRoute from "./routes/user";
import cors from "cors";

const MONGO_URL = process.env.MONGO_URL || '';

mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Sucessfull connection with Mongo!"))
    .catch((err) => {
        console.log(err);
    })

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/stripe", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("API is running on port " + process.env.PORT)
})
