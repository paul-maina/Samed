const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  category: String,
  description: String,
  price: Number,
  image: String
});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;
