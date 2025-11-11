const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const User = require('../models/User');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `resume_${req.user._id}_${Date.now()}${ext}`);
  }
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

router.get('/me', auth, async (req, res) => {
  res.json(req.user);
});

router.post('/upload-resume', auth, upload.single('resume'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  const urlPath = `/uploads/${req.file.filename}`;
  await User.findByIdAndUpdate(req.user._id, { resumeUrl: urlPath });
  res.json({ message: 'Uploaded', resumeUrl: urlPath });
});

module.exports = router;
