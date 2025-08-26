

import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Medicine from './Samed/models/Medicine.js';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON
const dataPath = path.join(__dirname, 'medicine.json');
const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Connect using env variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('✅ Connected to MongoDB');

  await Medicine.deleteMany({});
  console.log('🗑️ Existing data cleared');

  await Medicine.insertMany(jsonData);
  console.log('✅ Data inserted');

  mongoose.connection.close();
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
