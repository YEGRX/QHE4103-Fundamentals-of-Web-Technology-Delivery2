<?php

require_once __DIR__ . '/bootstrap.php';

requireMethod('POST');

$_SESSION = [];

if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params['path'],
        $params['domain'],
        (bool)$params['secure'],
        (bool)$params['httponly']
    );
}

session_destroy();

jsonResponse([
    'success' => true,
    'message' => 'Logged out.',
    'data' => [
        'authenticated' => false,
    ],
]);
