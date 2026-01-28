# Deployment für GitHub Pages (Single HTML File)

## Voraussetzungen
- Das gebaute Projekt befindet sich in `public/index.html` (alle Assets sind inline, keine PHP-Dateien mehr nötig).
- Ein GitHub-Repository ist vorhanden.

## Schritt-für-Schritt-Anleitung

### 1. Optional: Entferne alte PHP- und API-Dateien
Lösche `index.php` und ggf. alte Backend-Dateien, da sie für GitHub Pages nicht benötigt werden.

### 2. Deployment-Ordner vorbereiten
Kopiere die Datei `public/index.html` in einen Ordner, den GitHub Pages als Quelle nutzen kann, z. B. `docs/` oder den Branch `gh-pages`.

**Variante A: Deployment im `docs/`-Ordner (empfohlen für User Pages)**
1. Erstelle einen Ordner `docs` im Projektroot.
2. Kopiere `public/index.html` nach `docs/index.html`.
3. Committe und pushe die Änderungen:
   ```powershell
   git add docs/index.html
   git commit -m "Deploy SPA as single HTML file for GitHub Pages"
   git push
   ```
4. Gehe zu den Repository-Einstellungen → Pages → Quelle: `docs/`-Ordner auswählen.

**Variante B: Deployment im Branch `gh-pages` (empfohlen für Projektseiten)**
1. Erstelle einen neuen Branch `gh-pages` (nur die gebaute Datei):
   ```powershell
   git checkout --orphan gh-pages
   git rm -rf .
   mkdir public
   cp public/index.html public/index.html
   git add public/index.html
   git commit -m "Deploy SPA as single HTML file"
   git push origin gh-pages
   ```
2. In den Repository-Einstellungen → Pages → Quelle: Branch `gh-pages`, Ordner `/public` auswählen.

### 3. Wichtige Hinweise
- Die App funktioniert als reine SPA, alle Routen werden clientseitig gehandhabt.
- Für History-API-Routing: Lege eine Kopie von `index.html` als `404.html` an, damit Deep-Links funktionieren.
- Keine PHP- oder Backend-Funktionalität möglich.


---

**Fertig!** Deine App läuft jetzt als Single-Page-HTML auf GitHub Pages.
