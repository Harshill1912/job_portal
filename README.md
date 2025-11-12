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
1. Register
POST /api/auth/register

Body (JSON):

json
Copy code
{
  "name": "Harshil",
  "email": "harshil@example.com",
  "password": "Password123"
}
Response:

json
Copy code
{
  "token": "<jwt_token>",
  "user": {
    "_id": "...",
    "name": "Harshil",
    "email": "harshil@example.com",
    "resumeUrl": null
  }
}
2. Login
POST /api/auth/login

Body (JSON):

json
Copy code
{
  "email": "harshil@example.com",
  "password": "Password123"
}
Response:

json
Copy code
{
  "token": "<jwt_token>",
  "user": { ... }
}
3. Get Jobs
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
  }
]
4. Apply to Job
POST /api/jobs/:jobId/apply

Headers:

makefile
Copy code
Authorization: Bearer <jwt_token>
Body (form-data):

coverLetter (Text)

resume (File)

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
5. View Applications
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

Resume files are uploaded to uploads/ folder (local).

Seed script adds sample jobs if needed: npm run seed.

yaml
Copy code

---

1. **Add `.gitignore`** in your project root:

node_modules/
.env
uploads/
.DS_Store

javascript
Copy code

2. **Optional:** Add root `/` route in `app.js`:

```js
app.get('/', (req, res) => {
  res.send(`
    <h2>Job Application Portal API is live!</h2>
    <p>Use the following endpoints with Postman or your frontend:</p>
    <ul>
      <li>POST /api/auth/register</li>
      <li>POST /api/auth/login</li>
      <li>GET /api/jobs</li>
      <li>POST /api/jobs/:jobId/apply</li>
      <li>GET /api/applications</li>
    </ul>
    <p>Use Authorization header for protected routes: Bearer &lt;token&gt;</p>
  `);
});
Commit & Push:

bash
Copy code
git add README.md .gitignore app.js
git commit -m "Finalize README and add root route"
git push origin main
Render will redeploy automatically.

Your project is now fully submission-ready with live URL and GitHub repo.

If you want, I can also make a ready-to-import Postman collection JSON for all endpoints so anyone testing your API can import it directly.

Do you want me to make that?







You said:
dont take my name use other name i have to submit t



ChatGPT said:
Got it! I’ve replaced your name with a placeholder name so it’s ready for submission. Here’s the final polished README.md you can copy directly:

markdown
Copy code
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
1. Register
POST /api/auth/register

Body (JSON):

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

Body (JSON):

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
3. Get Jobs
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
  }
]
4. Apply to Job
POST /api/jobs/:jobId/apply

Headers:

makefile
Copy code
Authorization: Bearer <jwt_token>
Body (form-data):

coverLetter (Text)

resume (File)

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
5. View Applications
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
