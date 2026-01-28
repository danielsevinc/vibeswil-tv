<?php
// SPA Entry Point: Leitet alle Anfragen an das React-Build weiter
$publicDir = __DIR__ . '/public';
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$filePath = realpath($publicDir . $requestUri);

// Wenn die Datei existiert, direkt ausliefern
if ($filePath && strpos($filePath, realpath($publicDir)) === 0 && is_file($filePath)) {
    return false; // Übergibt an den Webserver (z.B. Apache/Nginx)
}
// Ansonsten index.html ausliefern (SPA-Fallback)
readfile($publicDir . '/index.html');
