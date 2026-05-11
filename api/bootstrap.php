<?php

require_once __DIR__ . '/../config/database.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function jsonResponse($payload, $statusCode = 200)
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload);
    exit;
}

function readJsonBody()
{
    $raw = file_get_contents('php://input');

    if ($raw === false || trim($raw) === '') {
        return [];
    }

    $data = json_decode($raw, true);

    if (!is_array($data)) {
        jsonResponse([
            'success' => false,
            'message' => 'Invalid request body.',
        ], 400);
    }

    return $data;
}

function requireMethod($method)
{
    if (strtoupper($_SERVER['REQUEST_METHOD'] ?? '') !== strtoupper($method)) {
        jsonResponse([
            'success' => false,
            'message' => 'Request method not allowed.',
        ], 405);
    }
}

function currentSeller()
{
    if (!isset($_SESSION['seller']) || !is_array($_SESSION['seller'])) {
        return null;
    }

    return $_SESSION['seller'];
}

function requireSeller()
{
    $seller = currentSeller();

    if (!$seller) {
        jsonResponse([
            'success' => false,
            'message' => 'Please login first.',
        ], 401);
    }

    return $seller;
}

function bindStatementParams($statement, $types, $values)
{
    if ($types === '' || empty($values)) {
        return;
    }

    $params = [$statement, $types];

    foreach ($values as $index => $value) {
        $params[] = &$values[$index];
    }

    call_user_func_array('mysqli_stmt_bind_param', $params);
}
