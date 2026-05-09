# Phase B API Folder

This folder is reserved for PHP endpoints.

`bootstrap.php` is the shared foundation for every endpoint. It loads the
database settings, starts the PHP session, and provides common JSON helper
functions. `add-car.php` uses MySQLi so the add-car work follows the Lecture 13
style.

Planned endpoints for this conversation:

- `add-car.php`: handled by `qihaocui`, saves a logged-in seller's car into MySQL using MySQLi.
- `login.php`: handled by `liboyiboop`, verifies seller credentials from MySQL and starts a PHP session.
- `logout.php`: handled by `liboyiboop`, clears the PHP session.
- `session.php`: handled by `liboyiboop`, returns current login state for the shared header and protected pages.
- `search.php`: handled by `tonghaoge`, searches cars from MySQL by model and year, with optional filters.

All endpoints should reuse `config/database.php`.

Recommended endpoint pattern for endpoints that use the shared PDO helper:

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
