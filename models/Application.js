const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required:true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true },
  coverLetter: { type: String },
  resumeUrl: { type: String },
  status: { type: String, default: 'submitted' },
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);
