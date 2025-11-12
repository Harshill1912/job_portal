# Job Application Portal API

A simple **RESTful API** built with Node.js and Express.js that allows job candidates to:

- Register and log in
- Upload resumes
- Apply for job listings
- View submitted applications

---

## Technology Stack

- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Atlas)  
- **File Uploads:** Multer  
- **Authentication:** JWT (JSON Web Tokens)

---

## Live API URL

[https://job-portal-fky9.onrender.com](https://job-portal-fky9.onrender.com)

> Visiting the base URL shows a simple info page listing all API endpoints.

---

## Setup Instructions

1. **Clone the repository:**

```bash
git clone <your-github-repo-url>
cd job-portal
Install dependencies:

bash
Copy code
npm install
Create a .env file from .env.example:

ini
Copy code
PORT=4000
MONGO_URI=<your-mongo-uri>
JWT_SECRET=<your-jwt-secret>
TOKEN_EXPIRY=7d
(Optional) Seed sample jobs:

bash
Copy code
npm run seed
Start the server:

bash
Copy code
npm run dev
API Endpoints
1. Register a New User
POST /api/auth/register

Request Body (JSON):

json
Copy code
{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "password": "Password123"
}
Response:

json
Copy code
{
  "token": "<jwt_token>",
  "user": {
    "_id": "...",
    "name": "Alex Johnson",
    "email": "alex@example.com",
    "resumeUrl": null
  }
}
2. Login
POST /api/auth/login

Request Body (JSON):

json
Copy code
{
  "email": "alex@example.com",
  "password": "Password123"
}
Response:

json
Copy code
{
  "token": "<jwt_token>",
  "user": { ... }
}
3. Get All Jobs
GET /api/jobs

Response:

json
Copy code
[
  {
    "_id": "6913697586a05628ffc06e0f",
    "title": "Backend Developer",
    "company": "Potenz Technology",
    "location": "Remote",
    "description": "Build APIs using Node.js and Express."
  },
  {
    "_id": "6913697586a05628ffc06e10",
    "title": "Frontend Developer",
    "company": "Potenz Technology",
    "location": "Bengaluru",
    "description": "React developer for web applications."
  }
]
4. Apply to a Job
POST /api/jobs/:jobId/apply

Headers:

makefile
Copy code
Authorization: Bearer <jwt_token>
Request Body (form-data):

Key	Type	Description
coverLetter	Text	Your cover letter text
resume	File	Your resume file (PDF)

Response:

json
Copy code
{
  "message": "Application submitted successfully",
  "application": {
    "_id": "...",
    "user": "...",
    "job": "...",
    "coverLetter": "...",
    "resumeUrl": "uploads/filename.pdf",
    "createdAt": "..."
  }
}
5. View Your Applications
GET /api/applications

Headers:

makefile
Copy code
Authorization: Bearer <jwt_token>
Response:

json
Copy code
[
  {
    "_id": "...",
    "job": { ... },
    "coverLetter": "...",
    "resumeUrl": "...",
    "createdAt": "..."
  }
]
Notes
Protected routes require Authorization header with JWT token.

Resume files are uploaded to the uploads/ folder (local).

Seed script adds sample jobs if needed: npm run seed.
