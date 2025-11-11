require('dotenv').config();
const mongoose = require('mongoose');
const Job = require('./models/Job');

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/job_portal';
const sample = [
  { title: 'Backend Developer', company: 'Potenz Technology', location: 'Remote', description: 'Build APIs using Node.js and Express.' },
  { title: 'Frontend Developer', company: 'Potenz Technology', location: 'Bengaluru', description: 'React developer for web applications.' },
  { title: 'Data Engineer', company: 'Potenz Technology', location: 'Hyderabad', description: 'Work with data pipelines and ETL.' }
];

mongoose.connect(MONGO, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(async ()=> {
    console.log('Connected. Seeding jobs...');
    await Job.deleteMany({});
    await Job.insertMany(sample);
    console.log('Seeded.');
    process.exit(0);
  }).catch(err=> {
    console.error(err);
    process.exit(1);
  });
