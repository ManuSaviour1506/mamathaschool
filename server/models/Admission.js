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
  parentEmail: {
    type: String,
    required: false,
  },
  parentPhone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  zipCode: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;