<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

requireMethod('GET');

$model = trim((string)($_GET['model'] ?? ''));
$year = trim((string)($_GET['year'] ?? ''));
$brand = trim((string)($_GET['brand'] ?? ''));
$bodyStyle = trim((string)($_GET['bodyStyle'] ?? ($_GET['body'] ?? '')));
$fuel = trim((string)($_GET['fuel'] ?? ''));
$sort = trim((string)($_GET['sort'] ?? 'featured'));

if ($year !== '' && !preg_match('/^\d{4}$/', $year)) {
    jsonResponse([
        'success' => false,
        'message' => 'Year must use a four-digit format, for example 2024.',
    ], 400);
}

$sortOptions = [
    'featured' => 'c.featured DESC, c.year DESC, c.price DESC',
    'price-asc' => 'c.price ASC, c.year DESC',
    'price-desc' => 'c.price DESC, c.year DESC',
    'year-desc' => 'c.year DESC, c.price DESC',
    'year-asc' => 'c.year ASC, c.price DESC',
];

$orderBy = $sortOptions[$sort] ?? $sortOptions['featured'];
$where = [];
$params = [];

if ($model !== '') {
    $where[] = '(c.model LIKE :model OR c.brand LIKE :model)';
    $params['model'] = '%' . $model . '%';
}

if ($year !== '') {
    $where[] = 'c.year = :year';
    $params['year'] = (int)$year;
}

if ($brand !== '') {
    $where[] = 'c.brand = :brand';
    $params['brand'] = $brand;
}

if ($bodyStyle !== '') {
    $where[] = 'c.body_style = :body_style';
    $params['body_style'] = $bodyStyle;
}

if ($fuel !== '') {
    $where[] = 'c.fuel = :fuel';
    $params['fuel'] = $fuel;
}

$whereSql = $where ? 'WHERE ' . implode(' AND ', $where) : '';

try {
    $pdo = getDatabaseConnection();
    $statement = $pdo->prepare(
        "SELECT
            c.car_id,
            c.brand,
            c.model,
            c.year,
            c.color,
            c.location,
            c.price,
            c.image_url,
            c.body_style,
            c.mileage,
            c.fuel,
            c.transmission,
            c.power,
            c.torque,
            c.acceleration,
            c.top_speed,
            c.drivetrain,
            c.seats,
            c.vehicle_condition,
            c.seller_type,
            c.market_note,
            c.featured,
            c.description,
            s.username AS seller_username,
            s.name AS seller_name
        FROM cars c
        INNER JOIN sellers s ON s.seller_id = c.seller_id
        {$whereSql}
        ORDER BY {$orderBy}
        LIMIT 100"
    );
    $statement->execute($params);
    $cars = array_map('mapCarRow', $statement->fetchAll());

    jsonResponse([
        'success' => true,
        'message' => count($cars) === 1 ? '1 vehicle found.' : count($cars) . ' vehicles found.',
        'data' => [
            'cars' => $cars,
            'count' => count($cars),
            'filters' => [
                'model' => $model,
                'year' => $year,
                'brand' => $brand,
                'bodyStyle' => $bodyStyle,
                'fuel' => $fuel,
                'sort' => $sort,
            ],
        ],
    ]);
} catch (PDOException $error) {
    jsonResponse([
        'success' => false,
        'message' => 'Database search failed. Check the local MySQL configuration.',
    ], 500);
}

function mapCarRow(array $row): array
{
    return [
        'id' => buildCarId($row),
        'databaseId' => (int)$row['car_id'],
        'brand' => $row['brand'],
        'model' => $row['model'],
        'year' => (int)$row['year'],
        'color' => $row['color'],
        'location' => $row['location'],
        'price' => (float)$row['price'],
        'image' => $row['image_url'] ?: '',
        'bodyStyle' => $row['body_style'] ?: 'Luxury Coupe',
        'mileage' => isset($row['mileage']) ? (int)$row['mileage'] : 0,
        'fuel' => $row['fuel'] ?: 'Petrol',
        'transmission' => $row['transmission'] ?: 'Automatic',
        'power' => $row['power'] ?: '',
        'torque' => $row['torque'] ?: '',
        'acceleration' => $row['acceleration'] ?: '',
        'topSpeed' => $row['top_speed'] ?: '',
        'drivetrain' => $row['drivetrain'] ?: '',
        'seats' => $row['seats'] ?: '',
        'condition' => $row['vehicle_condition'] ?: 'Used',
        'sellerType' => $row['seller_type'] ?: 'Private seller',
        'marketNote' => $row['market_note'] ?: 'Market positioning is based on comparable premium listings.',
        'description' => $row['description'] ?: '',
        'featured' => (bool)$row['featured'],
        'seller' => [
            'username' => $row['seller_username'],
            'name' => $row['seller_name'],
        ],
    ];
}

function buildCarId(array $row): string
{
    $base = strtolower((string)$row['brand'] . ' ' . (string)$row['model']);
    $slug = preg_replace('/[^a-z0-9]+/', '-', $base);
    $slug = trim((string)$slug, '-');

    return $slug ? 'car-' . $slug : 'db-car-' . (int)$row['car_id'];
}
