import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import medicineRoutes from './routes/medicine.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('Mongo error:', err));

app.use('/api/medicines', medicineRoutes); // << Prefix all routes from medicine.js

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
