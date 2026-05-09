<?php

if (!defined('DB_HOST')) {
    define('DB_HOST', getenv('OCS_DB_HOST') ?: 'localhost');
}

if (!defined('DB_PORT')) {
    define('DB_PORT', getenv('OCS_DB_PORT') ?: '3306');
}

if (!defined('DB_NAME')) {
    define('DB_NAME', getenv('OCS_DB_NAME') ?: 'online_car_sale');
}

if (!defined('DB_USER')) {
    define('DB_USER', getenv('OCS_DB_USER') ?: 'root');
}

if (!defined('DB_PASS')) {
    define('DB_PASS', getenv('OCS_DB_PASS') ?: '');
}

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

function getDatabaseConnection()
{
    static $connection = null;

    if ($connection instanceof mysqli) {
        return $connection;
    }

    $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, (int)DB_PORT);
    mysqli_set_charset($connection, 'utf8mb4');

    return $connection;
}
