# Phase B API Folder

This folder is reserved for PHP endpoints.

`bootstrap.php` is the shared foundation for every endpoint. It loads the PDO
database connection, starts the PHP session, and provides common JSON helper
functions.

Implemented login endpoints:

- `login.php`: handled by `liboyiboop`, verifies seller credentials from MySQL and starts a PHP session.
- `logout.php`: handled by `liboyiboop`, clears the PHP session.
- `session.php`: handled by `liboyiboop`, returns current login state for the shared header and protected pages.

Planned search endpoint:

- `search.php`: handled by `tonghaoge`, searches cars from MySQL by model and year, with optional filters.

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
