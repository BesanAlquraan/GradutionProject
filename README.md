Smart Personal Finance Management System

1️⃣ Overview | 
This project is a full-stack local graduation project, designed to manage personal finances smartly.
It includes:
- Frontend: Flutter (v3.13.6)
- Backend: Spring Boot (v3.2.0)
- Database: PostgreSQL (v15)
- Fake Bank module for testing payments

Note: This project is designed to run locally on your computer. It is not deployed online.
.

2️⃣ Project Structure | 
project-root/
- frontend/        (Flutter app)
- backend/         (Spring Boot backend)
- database/        (SQL scripts for PostgreSQL)
- fake_bank/       (Fake Bank module for testing)
- README.md        (Project instructions)

3️⃣ Setup Instructions |

Frontend | 
1. Navigate to frontend/
2. Install Flutter dependencies:
   flutter pub get
3. Run the app:
   flutter run
4. Ensure the backend server is running and URLs in SettingsStore.dart are configured correctly.
 .

Backend | 
1. Navigate to backend/
  /
2. Open the Spring Boot project in IDE (IntelliJ IDEA / VS Code / Eclipse)
 
3. Build and run the backend:
   ./mvnw spring-boot:run

4. Default backend URL: http://localhost:8080
  .

Database | 
1. Install PostgreSQL and create a database:
   CREATE DATABASE smart_finance;
2. Import SQL dump from database/db.sql:
   psql -U username -d smart_finance -f database/db.sql
3. Update application.properties in backend to match local database credentials.
 .

Fake Bank | 
1. See fake_bank/README.md for instructions on testing payments locally.
 .

4️⃣ Notes | 
- This is a fully local project. All APIs run on your machine.
 .
- All URLs, ports, and credentials must match between frontend, backend, and database..
- Make sure you are running the correct versions of Flutter, Spring Boot, and PostgreSQL.
