# VIBES WIL · TV Display

Eine Single Page Application für die Anzeige der Getränke- und Shishakarte von VIBES WIL auf einem TV-Display.

## Features

- **3-Spalten-Layout**: Links und Mitte zeigen rotierende Getränkekategorien, rechts die Shisha-Karte
- **Automatische Rotation**: Kategorien wechseln alle 10 Sekunden mit sanften Überblendungen
- **Auto-Scroll**: Lange Listen scrollen automatisch für bessere Sichtbarkeit
- **Responsives Design**: Optimiert für TV-Displays
- **Gold & Schwarz Theme**: Elegantes Design mit goldenen Akzenten

## Technologie

- **Single Page Application**: Alles in einer HTML-Datei
- **Keine Abhängigkeiten**: Standalone HTML, CSS und JavaScript
- **GitHub Pages**: Automatisches Deployment bei Push auf main Branch

## Deployment

Die Applikation wird automatisch auf GitHub Pages deployed, wenn Änderungen auf den `main` Branch gepusht werden.

### Manuelles Deployment

Die `index.html` Datei kann auf jeden Webserver hochgeladen werden - keine Server-seitige Verarbeitung notwendig.

## Lokale Entwicklung

### Mit Python HTTP Server

```bash
python3 -m http.server 8000
```

### Mit PHP Built-in Server

```bash
php -S localhost:8000
```

### Mit Node.js HTTP Server

```bash
npx http-server -p 8000
```

Dann im Browser öffnen: `http://localhost:8000/index.html`

## Anpassungen

### Für dauerhafte Änderungen:

Bearbeiten Sie die `index.php` Datei mit den gewünschten Änderungen, dann generieren Sie die HTML-Datei neu:

```bash
php index.php > index.html
```

### Wichtige Konfigurationsvariablen in index.php:

- `$DATA['drinks']`: Alle Getränke und deren Kategorien
- `$DATA['shisha']`: Shisha-Sorten und Preise
- `$IMAGE_MAP`: Zuordnung von Kategorien zu Hintergrundbildern
- `ROTATE_MS` (JavaScript): Rotationszeit in Millisekunden (Standard: 10000)

## Projektstruktur

- `index.html` - Die deploybare Single Page Application (generiert aus index.php)
- `index.php` - Source-Datei zum Bearbeiten und Regenerieren der HTML
- `.github/workflows/deploy.yml` - GitHub Pages Deployment-Workflow

## Lizenz

© 2025 Vibes Wil · Created by Daniel Sevinc
