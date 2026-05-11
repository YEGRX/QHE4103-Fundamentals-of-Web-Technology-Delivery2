# Phase B Database Setup

This folder contains the shared MySQL database foundation for Delivery 3.

## Files

- `schema.sql` creates the `online_car_sale` database, `sellers` table, and `cars` table.
- `seed.sql` adds a demo seller and two sample cars for testing login and search.
- `../config/database.php` provides the shared MySQL connection.
- `../api/bootstrap.php` provides shared session, JSON response, request-body, and method helpers.

## Suggested setup order

1. Start MySQL or MariaDB.
2. Run `database/schema.sql`.
3. Optionally run `database/seed.sql`.
4. Update `config/database.php` if the local database username or password is different.

## Demo login

- Username: `surpass01`
- Password: `drive2026`

The password stored in `seed.sql` is a bcrypt hash compatible with PHP `password_verify()`.

## Feature ownership

- `liboyiboop`: build `api/login.php`, `api/logout.php`, and `api/session.php` on top of `api/bootstrap.php`.
- `tonghaoge`: build `api/search.php` on top of `api/bootstrap.php` and query the `cars` table.
- `yegrx`: build `api/register.php` on top of `api/bootstrap.php` and store seller accounts in the `sellers` table.
- `qihaocui`: build `api/add-car.php` on top of `api/bootstrap.php` and store vehicle listings in the `cars` table with the logged-in seller ID.

## Shared response shape

All PHP endpoints should return JSON using this structure:

```json
{
  "success": true,
  "message": "Human readable status message.",
  "data": {}
}
