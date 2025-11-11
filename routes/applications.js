const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const Job = require('../models/Job');
const Application = require('../models/Application');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `app_resume_${req.user._id}_${Date.now()}${ext}`);
  }
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// apply to job
router.post('/jobs/:id/apply', auth, upload.single('resume'), async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    // prevent duplicate applications by same user for same job
    const existing = await Application.findOne({ job: job._id, user: req.user._id });
    if (existing) return res.status(400).json({ message: 'Already applied' });
    let resumeUrl = req.user.resumeUrl;
    if (req.file) resumeUrl = `/uploads/${req.file.filename}`;
    const app = new Application({
      job: job._id,
      user: req.user._id,
      coverLetter: req.body.coverLetter || '',
      resumeUrl
    });
    await app.save();
    res.json(app);
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// get current user's applications
router.get('/applications', auth, async (req, res) => {
  const apps = await Application.find({ user: req.user._id }).populate('job').sort({ appliedAt: -1 });
  res.json(apps);
});

module.exports = router;
