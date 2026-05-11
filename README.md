# QHE4103 Online Car Sale Website

This repository contains the Online Car Sale coursework website for QHE4103 Fundamentals of Web Technology.

The front-end pages were first developed during Phase A as an AI-assisted prototype. In Phase B, the group continued from that website and added the required back-end functions, including MySQL database storage, seller registration, seller login, session handling, vehicle publishing, and car search.

## Project workflow

The project follows the required GitHub workflow:

- `main`: final deployable version.
- `develop`: integration branch for completed work.
- `feature/*`: individual feature branches for separate tasks.
- Feature branches are merged into `develop` through pull requests.
- The final version is merged from `develop` into `main`.

## Phase B features

- Seller registration with server-side validation and MySQL storage.
- Seller login using stored credentials and PHP sessions.
- Session checking for shared page state and protected seller actions.
- Protected add-car flow for logged-in sellers.
- Vehicle listings stored in MySQL with the seller ID as a foreign key.
- Search function using model and year, with extra filters for brand, body style, fuel type, and sorting.
- Shared database connection and JSON response helpers for API endpoints.

## Key folders

- `api/`: PHP endpoints for registration, login, logout, session checking, add-car, and search.
- `config/`: shared database connection settings.
- `database/`: MySQL schema and seed data.
- `assets/`: shared CSS, JavaScript, images, and media.
- `docs/`: testing notes and walkthrough checklist.

## Database setup

1. Start MySQL or MariaDB using XAMPP, MAMP, or another local server environment.
2. Import `database/schema.sql`.
3. Optionally import `database/seed.sql` for demo data.
4. Update `config/database.php` if the local database username, password, host, or port is different.

## Demo login

After importing the seed data, the following seller account can be used for testing:

- Username: `surpass01`
- Password: `drive2026`

## Main pages

- `index.html`: homepage.
- `registration.html`: seller registration page.
- `login.html`: seller login page.
- `seller.html`: seller hub.
- `add-car.html`: protected vehicle publishing page.
- `search.html`: buyer search page.
- `car-detail.html`: vehicle detail page.

