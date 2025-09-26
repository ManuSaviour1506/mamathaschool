const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const galleryRoutes = require('./routes/gallery.routes');
const testimonialRoutes = require('./routes/testimonial.routes');
const admissionRoutes = require('./routes/admission.routes');
const contactRoutes = require('./routes/contact.routes');

dotenv.config();

connectDB();

const app = express();

// Set a larger body size limit for JSON to handle Base64 image data
app.use(express.json({ limit: '50mb' })); 
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));