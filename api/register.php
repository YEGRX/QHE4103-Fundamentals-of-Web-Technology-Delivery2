<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

requireMethod('POST');

$input = $_POST;
if (empty($input)) {
    $input = readJsonBody();
}

$name = trim((string)($input['name'] ?? ''));
$address = trim((string)($input['address'] ?? ''));
$phone = trim((string)($input['phone'] ?? ''));
$email = trim((string)($input['email'] ?? ''));
$username = trim((string)($input['username'] ?? ''));
$password = trim((string)($input['password'] ?? ''));

if (
    $name === '' ||
    $address === '' ||
    $phone === '' ||
    $email === '' ||
    $username === '' ||
    $password === ''
) {
    jsonResponse([
        'success' => false,
        'message' => 'Please complete all registration fields.',
    ], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse([
        'success' => false,
        'message' => 'Please enter a valid email address.',
    ], 400);
}

if (strlen($username) < 6 || !preg_match('/^[A-Za-z0-9]+$/', $username)) {
    jsonResponse([
        'success' => false,
        'message' => 'Username must contain at least 6 letters or numbers.',
    ], 400);
}

if (strlen($password) < 6 || !preg_match('/^[A-Za-z0-9]+$/', $password)) {
    jsonResponse([
        'success' => false,
        'message' => 'Password must contain at least 6 letters or numbers.',
    ], 400);
}

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, (int)DB_PORT);
    mysqli_set_charset($connection, 'utf8mb4');

    $checkSql = 'SELECT seller_id FROM sellers WHERE username = ? OR email = ? LIMIT 1';
    $checkStatement = mysqli_prepare($connection, $checkSql);
    mysqli_stmt_bind_param($checkStatement, 'ss', $username, $email);
    mysqli_stmt_execute($checkStatement);
    mysqli_stmt_store_result($checkStatement);

    if (mysqli_stmt_num_rows($checkStatement) > 0) {
        mysqli_stmt_close($checkStatement);
        mysqli_close($connection);

        jsonResponse([
            'success' => false,
            'message' => 'This username or email is already registered.',
        ], 409);
    }

    mysqli_stmt_close($checkStatement);

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    $insertSql = '
        INSERT INTO sellers (name, address, phone, email, username, password_hash)
        VALUES (?, ?, ?, ?, ?, ?)
    ';

    $insertStatement = mysqli_prepare($connection, $insertSql);
    mysqli_stmt_bind_param(
        $insertStatement,
        'ssssss',
        $name,
        $address,
        $phone,
        $email,
        $username,
        $passwordHash
    );
    mysqli_stmt_execute($insertStatement);

    $sellerId = mysqli_insert_id($connection);

    mysqli_stmt_close($insertStatement);
    mysqli_close($connection);

    jsonResponse([
        'success' => true,
        'message' => 'Seller registration completed.',
        'data' => [
            'seller_id' => $sellerId,
            'username' => $username,
        ],
    ], 201);
} catch (mysqli_sql_exception $error) {
    jsonResponse([
        'success' => false,
        'message' => 'Database error while registering seller.',
    ], 500);
}
