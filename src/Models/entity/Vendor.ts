import mongoose from "mongoose";
const { Schema } = mongoose;

const vendorSchema = new Schema({
    name: String,
    createdAt: Date,
    updatedAt: Date
});

export const Vendor = mongoose.model("Vendor", vendorSchema);
