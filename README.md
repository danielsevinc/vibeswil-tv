# VIBES WIL · TV Display

Eine PHP Single Page Application für die Anzeige der Getränke- und Shishakarte von VIBES WIL auf einem TV-Display.

## Features

- **3-Spalten-Layout**: Links und Mitte zeigen rotierende Getränkekategorien, rechts die Shisha-Karte
- **Automatische Rotation**: Kategorien wechseln alle 10 Sekunden mit sanften Überblendungen
- **Auto-Scroll**: Lange Listen scrollen automatisch für bessere Sichtbarkeit
- **Responsives Design**: Optimiert für TV-Displays
- **Gold & Schwarz Theme**: Elegantes Design mit goldenen Akzenten

## Technologie

- **PHP**: Single Page Application ohne externe Abhängigkeiten
- **Inline CSS & JavaScript**: Alles in einer einzigen Datei
- **GitHub Pages**: Automatisches Deployment bei Push auf main Branch

## Deployment

Die Applikation wird automatisch auf GitHub Pages deployed, wenn Änderungen auf den `main` Branch gepusht werden.

### Manuelles Deployment

1. Die `index.php` Datei auf einen PHP-fähigen Webserver hochladen
2. Keine weiteren Konfigurationen oder Installationen notwendig

## Lokale Entwicklung

### Mit PHP Built-in Server

```bash
php -S localhost:8000
```

Dann im Browser öffnen: `http://localhost:8000/index.php`

## Anpassungen

Alle Menüdaten, Bilder-URLs und Konfigurationen befinden sich direkt in der `index.php` Datei und können dort bearbeitet werden.

### Wichtige Konfigurationsvariablen:

- `$DATA['drinks']`: Alle Getränke und deren Kategorien
- `$DATA['shisha']`: Shisha-Sorten und Preise
- `$IMAGE_MAP`: Zuordnung von Kategorien zu Hintergrundbildern
- `ROTATE_MS`: Rotationszeit in Millisekunden (Standard: 10000)

## Lizenz

© 2025 Vibes Wil · Created by Daniel Sevinc
