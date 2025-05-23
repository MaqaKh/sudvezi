# Sudvezi Backend

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

## Database Configuration

The backend application connects to a MySQL database using environment variables. You need to configure these variables for the application to run correctly.

1.  **Environment Variables File:**
    The primary way to provide these variables is through a `.env` file located in the `backend` directory.

2.  **Template File:**
    A template file named `.env.example` is provided in the `backend` directory. This file shows the required environment variables:
    *   `DB_HOST`: The hostname or IP address of your MySQL server.
    *   `DB_USER`: The username for your MySQL database.
    *   `DB_PASSWORD`: The password for the specified user.
    *   `DB_DATABASE`: The name of the MySQL database to connect to.

3.  **Setup Steps:**
    *   Copy `backend/.env.example` to a new file named `backend/.env`:
        ```sh
        cp backend/.env.example backend/.env
        ```
    *   Open `backend/.env` and fill in your actual database credentials.

4.  **Security Note:**
    The `backend/.env` file contains sensitive credentials and should **never** be committed to version control. Ensure it is listed in your project's `.gitignore` file.
    ```
    # Example .gitignore entry
    backend/.env
    ```

This application uses Knex.js for database interactions, and its configuration (found in `backend/knexfile.js`) is set up to read these environment variables.

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