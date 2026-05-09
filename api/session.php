<?php

require_once __DIR__ . '/bootstrap.php';

requireMethod('GET');

$seller = currentSeller();

jsonResponse([
    'success' => true,
    'data' => [
        'authenticated' => $seller ? true : false,
        'seller' => $seller,
    ],
]);
