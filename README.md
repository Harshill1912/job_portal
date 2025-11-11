# Job Application Portal (Node.js + Express + MongoDB)

## Overview
A simple RESTful API allowing candidates to register/login, upload resumes, view sample jobs, apply to jobs, and track their applications.

## Features
- JWT authentication (register/login)
- Resume upload (Multer) — stored in `/uploads`
- Sample jobs (seed script)
- Apply to jobs and view user's applications

## Quick setup (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill values.
3. Run MongoDB (e.g., `mongod` locally or use a cloud MongoDB URI)
4. Seed sample jobs:
   ```bash
   npm run seed
   ```
5. Start server:
   ```bash
   npm run dev
   ```
6. API will run on `http://localhost:4000` (or the PORT in your `.env`).

## API Endpoints (summary)

### Auth
- `POST /api/auth/register`
  - Body: `{ "name","email","password" }`
  - Response: user (no password) and token
- `POST /api/auth/login`
  - Body: `{ "email","password" }`
  - Response: user and token

### User
- `GET /api/users/me` — get profile (auth)
- `POST /api/users/upload-resume` — multipart form-data `resume` file (auth). Updates user's `resumeUrl`.

### Jobs
- `GET /api/jobs` — list jobs
- `GET /api/jobs/:id` — get job detail

### Applications
- `POST /api/jobs/:id/apply` — apply to a job (auth)
  - Body (JSON or multipart if sending a resume file):
    - `coverLetter` (optional)
    - if sending a file use multipart with field `resume`
  - Response: application object
- `GET /api/applications` — get current user's applications (auth)

## Sample request/response (login)
- Request:
  ```json
  POST /api/auth/login
  {
    "email": "alice@example.com",
    "password": "P@ssw0rd"
  }
  ```
- Response:
  ```json
  {
    "token": "<jwt>",
    "user": {
      "_id":"64...",
      "name":"Alice",
      "email":"alice@example.com",
      "resumeUrl": null
    }
  }
  ```

## .env keys
See `.env.example`. You need `MONGO_URI` and `JWT_SECRET` at minimum.

## Deploying to Render (quick steps)
1. Create a Render Web Service, connect your GitHub repo.
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables on Render: `MONGO_URI`, `JWT_SECRET`, `PORT` (optional)
5. Make sure to configure a persistent file store or use object storage for resumes in production (Render ephemeral disk will be cleared on redeploy). For production, replace Multer local storage with S3/Cloud Storage.

## Notes & Security
- This example stores uploaded resumes on local disk — not suitable for production.
- Use HTTPS and strong JWT secrets in production.
- Limit upload types and sizes in Multer for safety.

## License
MIT
