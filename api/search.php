<?php

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
        'message' => 'Please enter a four-digit year.',
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
$types = '';
$values = [];

if ($model !== '') {
    $modelLike = '%' . $model . '%';
    $where[] = '(c.model LIKE ? OR c.brand LIKE ?)';
    $types .= 'ss';
    $values[] = $modelLike;
    $values[] = $modelLike;
}

if ($year !== '') {
    $where[] = 'c.year = ?';
    $types .= 'i';
    $values[] = (int)$year;
}

if ($brand !== '') {
    $where[] = 'c.brand = ?';
    $types .= 's';
    $values[] = $brand;
}

if ($bodyStyle !== '') {
    $where[] = 'c.body_style = ?';
    $types .= 's';
    $values[] = $bodyStyle;
}

if ($fuel !== '') {
    $where[] = 'c.fuel = ?';
    $types .= 's';
    $values[] = $fuel;
}

$sql = "
    SELECT
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
";

if (!empty($where)) {
    $sql .= ' WHERE ' . implode(' AND ', $where);
}

$sql .= " ORDER BY {$orderBy} LIMIT 100";

try {
    $connection = getDatabaseConnection();
    $statement = mysqli_prepare($connection, $sql);
    bindStatementParams($statement, $types, $values);
    mysqli_stmt_execute($statement);

    $result = mysqli_stmt_get_result($statement);
    $cars = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $cars[] = mapCarRow($row);
    }

    mysqli_stmt_close($statement);

    jsonResponse([
        'success' => true,
        'data' => [
            'cars' => $cars,
            'count' => count($cars),
        ],
    ]);
} catch (mysqli_sql_exception $error) {
    jsonResponse([
        'success' => false,
        'message' => 'Search failed. Please try again.',
    ], 500);
}

function mapCarRow($row)
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
        'marketNote' => $row['market_note'] ?: '',
        'description' => $row['description'] ?: '',
        'featured' => $row['featured'] ? true : false,
        'seller' => [
            'username' => $row['seller_username'],
            'name' => $row['seller_name'],
        ],
    ];
}

function buildCarId($row)
{
    $base = strtolower((string)$row['brand'] . ' ' . (string)$row['model']);
    $slug = preg_replace('/[^a-z0-9]+/', '-', $base);
    $slug = trim((string)$slug, '-');

    if ($slug === '') {
        return 'db-car-' . (int)$row['car_id'];
    }

    return 'car-' . $slug;
}
