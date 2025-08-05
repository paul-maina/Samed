// models/Medicine.js
import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  description: String,
  price: Number,
  image: String,
});

const Medicine = mongoose.model('Medicine', medicineSchema);
export default Medicine;
