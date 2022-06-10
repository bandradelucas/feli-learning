"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var vendorSchema = new Schema({
    name: String,
    createdAt: Date,
    updatedAt: Date
});
exports["default"] = Vendor = mongoose_1["default"].model("Vendor", vendorSchema);
