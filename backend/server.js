// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log("✅ MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
  console.error('❌ Error saving contact:', err);
  res.status(500).json({ error: err.message }); // ← send full error
});


// Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  organization: String,
  role: String,
  inquiryType: { type: String, required: true },
  message: { type: String, required: true },
  agreedToTerms: { type: Boolean, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const Contact = mongoose.model('Contact', contactSchema);

// Route
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📥 Incoming contact form data:', req.body); // Add this line

    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (err) {
    console.error('❌ Error saving contact:', err.message); // make error clearer
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
