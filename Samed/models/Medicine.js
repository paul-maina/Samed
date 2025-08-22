// models/Medicine.js
import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // removes extra spaces
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // prevent negative prices
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/150", // fallback if no image
    },
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

const Medicine = mongoose.model("Medicine", medicineSchema);
export default Medicine;
