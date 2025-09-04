import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Medicine from './models/Medicine.js';


// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON
const dataPath = path.join(__dirname, 'medicine.json');
const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Clean data (remove _id if present)
const cleanData = jsonData.map(({ _id, ...rest }) => rest);

// Seed function
async function loadData() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

    // Clear collection
    await Medicine.deleteMany({});
    console.log('🗑️ Existing data cleared');

    // Insert new data
    await Medicine.insertMany(cleanData);
    console.log(`✅ ${cleanData.length} records inserted`);

  } catch (err) {
    console.error('❌ Error loading data:', err);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
  }
}

// Run the loader
loadData();
