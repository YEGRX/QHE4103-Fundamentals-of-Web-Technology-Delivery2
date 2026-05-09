# Phase B API Folder

This folder is reserved for PHP endpoints.

Implemented endpoints:

- `login.php`: handled by `liboyiboop`, verifies seller credentials from MySQL and starts a PHP session.
- `logout.php`: handled by `liboyiboop`, clears the PHP session.
- `session.php`: handled by `liboyiboop`, returns current login state for the shared header and protected pages.
- `search.php`: handled by `tonghaoge`, searches cars from MySQL by model and year, with optional filters.

Pending endpoints from other members:

- `register.php`: database-backed seller registration flow.
- `add-car.php`: database-backed vehicle publishing flow.

All endpoints should reuse `config/database.php`.

Recommended endpoint pattern:

```php
<?php
require_once __DIR__ . '/bootstrap.php';

requireMethod('POST');
$pdo = getDatabaseConnection();
$body = readJsonBody();

jsonResponse([
    'success' => true,
    'message' => 'Request handled.',
    'data' => [],
]);
```
