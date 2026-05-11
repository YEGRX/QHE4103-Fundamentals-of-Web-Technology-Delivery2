<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

requireMethod('POST');

$seller = requireSeller();

$input = $_POST;
if (empty($input)) {
    $input = readJsonBody();
}

$sellerId = (int)($seller['seller_id'] ?? $seller['id'] ?? 0);

$brand = trim((string)($input['brand'] ?? ''));
$model = trim((string)($input['model'] ?? ''));
$year = trim((string)($input['year'] ?? ''));
$color = trim((string)($input['color'] ?? ''));
$location = trim((string)($input['location'] ?? ''));
$price = trim((string)($input['price'] ?? ''));

$imageUrl = trim((string)($input['image_url'] ?? $input['imageUrl'] ?? ''));
$bodyStyle = trim((string)($input['body_style'] ?? $input['bodyStyle'] ?? ''));
$mileage = trim((string)($input['mileage'] ?? ''));
$fuel = trim((string)($input['fuel'] ?? ''));
$transmission = trim((string)($input['transmission'] ?? ''));
$description = trim((string)($input['description'] ?? ''));

if ($sellerId <= 0) {
    jsonResponse([
        'success' => false,
        'message' => 'Seller session is invalid. Please sign in again.',
    ], 401);
}

if (
    $brand === '' ||
    $model === '' ||
    $year === '' ||
    $color === '' ||
    $location === '' ||
    $price === ''
) {
    jsonResponse([
        'success' => false,
        'message' => 'Please complete all required car fields.',
    ], 400);
}

if (!ctype_digit($year)) {
    jsonResponse([
        'success' => false,
        'message' => 'Year must be a number.',
    ], 400);
}

$yearValue = (int)$year;
$currentYear = (int)date('Y') + 1;

if ($yearValue < 1990 || $yearValue > $currentYear) {
    jsonResponse([
        'success' => false,
        'message' => 'Please enter a valid car year.',
    ], 400);
}

if (!is_numeric($price) || (float)$price <= 0) {
    jsonResponse([
        'success' => false,
        'message' => 'Price must be a positive number.',
    ], 400);
}

$priceValue = (float)$price;

$mileageValue = null;
if ($mileage !== '') {
    if (!ctype_digit($mileage)) {
        jsonResponse([
            'success' => false,
            'message' => 'Mileage must be a whole number.',
        ], 400);
    }

    $mileageValue = (int)$mileage;
}

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, (int)DB_PORT);
    mysqli_set_charset($connection, 'utf8mb4');

    $sql = '
        INSERT INTO cars (
            seller_id,
            brand,
            model,
            year,
            color,
            location,
            price,
            image_url,
            body_style,
            mileage,
            fuel,
            transmission,
            description
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ';

    $statement = mysqli_prepare($connection, $sql);

    mysqli_stmt_bind_param(
        $statement,
        'ississdssisss',
        $sellerId,
        $brand,
        $model,
        $yearValue,
        $color,
        $location,
        $priceValue,
        $imageUrl,
        $bodyStyle,
        $mileageValue,
        $fuel,
        $transmission,
        $description
    );

    mysqli_stmt_execute($statement);

    $carId = mysqli_insert_id($connection);

    mysqli_stmt_close($statement);
    mysqli_close($connection);

    jsonResponse([
        'success' => true,
        'message' => 'Car listing has been added.',
        'data' => [
            'car_id' => $carId,
            'seller_id' => $sellerId,
            'brand' => $brand,
            'model' => $model,
            'year' => $yearValue,
        ],
    ], 201);
} catch (mysqli_sql_exception $error) {
    jsonResponse([
        'success' => false,
        'message' => 'Database error while adding car.',
    ], 500);
}
