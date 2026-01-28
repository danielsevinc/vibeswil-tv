# Deployment-Anleitung für vibeswil-tv (PHP SPA)

## Voraussetzungen
- PHP 7.4 oder neuer
- Node.js & npm (für Build)
- Webserver (Apache/Nginx) mit DocumentRoot auf das Projektverzeichnis

## Build & Deployment

1. **Frontend bauen:**
	```powershell
	npm install
	npm run build
	```
	Das gebaute Frontend landet im `public/`-Verzeichnis.

2. **Deployment auf Server:**
	- Lade alle Dateien (inkl. `index.php`, `public/`, `package.json`, etc.) auf den Server.
	- Setze den DocumentRoot auf das Projektverzeichnis (dort wo `index.php` liegt).
	- Stelle sicher, dass PHP aktiviert ist.

3. **Rewrite/Router:**
	- Apache: `.htaccess` ist nicht nötig, da `index.php` alle Requests handled.
	- Nginx: Leite alle Requests an `index.php` weiter, falls Datei nicht existiert.

## Beispiel Nginx-Konfiguration
```
location / {
	 try_files $uri $uri/ /index.php?$query_string;
}
```

## Beispiel Apache-Konfiguration
```
<Directory /pfad/zum/projekt>
	 AllowOverride None
	 Require all granted
</Directory>

FallbackResource /index.php
```

## Hinweise
- Die SPA funktioniert mit History-API (saubere URLs).
- API-Endpunkte können als separate PHP-Dateien im Projekt ergänzt werden.
- Für zukünftige PHP-Versionen ist keine Anpassung nötig, solange keine veralteten Funktionen verwendet werden.
