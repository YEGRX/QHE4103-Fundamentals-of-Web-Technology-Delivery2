<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

requireMethod('POST');

$body = readJsonBody();
$username = trim((string)($body['username'] ?? ''));
$password = (string)($body['password'] ?? '');

if ($username === '' || $password === '') {
    jsonResponse([
        'success' => false,
        'message' => 'Enter both username and password.',
    ], 400);
}

try {
    $pdo = getDatabaseConnection();
    $statement = $pdo->prepare(
        'SELECT seller_id, name, email, username, password_hash
         FROM sellers
         WHERE username = :username
         LIMIT 1'
    );
    $statement->execute(['username' => $username]);
    $seller = $statement->fetch();

    if (!$seller || !password_verify($password, $seller['password_hash'])) {
        jsonResponse([
            'success' => false,
            'message' => 'The username or password is incorrect.',
        ], 401);
    }

    session_regenerate_id(true);
    $_SESSION['seller'] = [
        'id' => (int)$seller['seller_id'],
        'name' => $seller['name'],
        'email' => $seller['email'],
        'username' => $seller['username'],
    ];

    jsonResponse([
        'success' => true,
        'message' => 'Seller session activated.',
        'data' => [
            'seller' => $_SESSION['seller'],
        ],
    ]);
} catch (PDOException $error) {
    jsonResponse([
        'success' => false,
        'message' => 'Database connection failed. Check the local MySQL configuration.',
    ], 500);
}
