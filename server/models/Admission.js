const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gradeApplyingFor: {
    type: String,
    required: true,
  },
  parentName: {
    type: String,
    required: true,
  },
  parentPhone: {
    type: String,
    required: true,
  },
  // We keep parentEmail required for communication and logging, which the frontend handles internally
  parentEmail: { 
    type: String,
    required: true,
  },
}, { timestamps: true });

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
