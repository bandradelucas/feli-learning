import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    type: String,
    price: Number,
    createdAt: Date,
    updatedAt: Date
});

export const Vendor = mongoose.model("Product", productSchema);
