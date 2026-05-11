# Phase B API Folder

This folder is reserved for PHP endpoints.

Implemented endpoints:

- `login.php`: handled by `liboyiboop`, verifies seller credentials from MySQL and starts a PHP session.
- `logout.php`: handled by `liboyiboop`, clears the PHP session.
- `session.php`: handled by `liboyiboop`, returns current login state for the shared header and protected pages.
- `search.php`: handled by `tonghaoge`, searches cars from MySQL by model and year, with optional filters.
- `register.php`: handled by `yegrx`, validates seller registration details, checks for duplicate username/email, hashes the password, and stores the seller in MySQL.
- `add-car.php`: handled by `qihaocui`, requires an active seller session, validates vehicle details, and stores the new car in MySQL with the seller ID as a foreign key.



All endpoints should reuse `config/database.php`.

Recommended endpoint pattern:

```php
<?php
require_once __DIR__ . '/bootstrap.php';

requireMethod('POST');
$connection = getDatabaseConnection();
$body = readJsonBody();

jsonResponse([
    'success' => true,
    'message' => 'Request handled.',
    'data' => [],
]);
```
