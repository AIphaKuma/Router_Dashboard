<?php
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: content-type, authorization');
header('Access-Control-Allow-Methods: GET, POST, OPTION');
header('Content-type: application/json');

echo json_decode([
    'message' => 'coucou',
    'user' => $_SERVER['PHP_AUTH_USER'],
    'pwd' => $_SERVER['PHP_AUTH_PW']
])