<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function jsonResponse(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function readJsonBody(): array
{
    $rawBody = file_get_contents('php://input');

    if ($rawBody === false || trim($rawBody) === '') {
        return [];
    }

    $decoded = json_decode($rawBody, true);

    if (!is_array($decoded)) {
        jsonResponse([
            'success' => false,
            'message' => 'Invalid JSON request body.',
        ], 400);
    }

    return $decoded;
}

function requireMethod(string $method): void
{
    if ($_SERVER['REQUEST_METHOD'] !== strtoupper($method)) {
        jsonResponse([
            'success' => false,
            'message' => 'Unsupported request method.',
        ], 405);
    }
}

function currentSeller(): ?array
{
    return $_SESSION['seller'] ?? null;
}

function requireSeller(): array
{
    $seller = currentSeller();

    if (!$seller) {
        jsonResponse([
            'success' => false,
            'message' => 'Please sign in before continuing.',
        ], 401);
    }

    return $seller;
}
