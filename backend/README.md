# Sudvezi Backend

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Configure your MySQL database and update environment variables as needed (see `.env.example`).
3. Start the server:
   ```sh
   node server.js
   ```

## Folder Structure
- `routes/` - API route definitions
- `controllers/` - Business logic for endpoints
- `models/` - Database connection and models
- `views/` - EJS templates

## API Example
- `GET /api/hello` - Test endpoint
- `GET /api/users` - Fetch all users from the database 