<?php

require_once __DIR__ . '/bootstrap.php';

requireMethod('POST');

$input = readJsonBody();
$username = trim((string)($input['username'] ?? ''));
$password = trim((string)($input['password'] ?? ''));

if ($username === '' || $password === '') {
    jsonResponse([
        'success' => false,
        'message' => 'Please enter username and password.',
    ], 400);
}

try {
    $connection = getDatabaseConnection();
    $sql = 'SELECT seller_id, name, email, username, password_hash FROM sellers WHERE username = ? LIMIT 1';
    $statement = mysqli_prepare($connection, $sql);
    mysqli_stmt_bind_param($statement, 's', $username);
    mysqli_stmt_execute($statement);

    $result = mysqli_stmt_get_result($statement);
    $seller = mysqli_fetch_assoc($result);

    mysqli_stmt_close($statement);

    if (!$seller || !password_verify($password, $seller['password_hash'])) {
        jsonResponse([
            'success' => false,
            'message' => 'Username or password is incorrect.',
        ], 401);
    }

    session_regenerate_id(true);
    $_SESSION['seller'] = [
        'seller_id' => (int)$seller['seller_id'],
        'name' => $seller['name'],
        'email' => $seller['email'],
        'username' => $seller['username'],
    ];

    jsonResponse([
        'success' => true,
        'message' => 'Login successful.',
        'data' => [
            'seller' => $_SESSION['seller'],
        ],
    ]);
} catch (mysqli_sql_exception $error) {
    jsonResponse([
        'success' => false,
        'message' => 'Database connection failed.',
    ], 500);
}
