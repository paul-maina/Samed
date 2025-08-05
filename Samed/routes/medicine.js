import express from 'express';
import Medicine from '../models/Medicine.js';

const router = express.Router();

// Get all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// You can add more routes: POST, PUT, DELETE, etc.

export default router;
