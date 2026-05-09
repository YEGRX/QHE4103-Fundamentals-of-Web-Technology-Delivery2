<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

requireMethod('GET');

$seller = currentSeller();

jsonResponse([
    'success' => true,
    'message' => $seller ? 'Seller session active.' : 'No active seller session.',
    'data' => [
        'authenticated' => (bool)$seller,
        'seller' => $seller,
    ],
]);
