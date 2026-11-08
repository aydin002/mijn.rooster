# Mijn Werkplanner installeren via GitHub (gratis)

De app is een webapp (PWA). Je zet hem één keer online via GitHub Pages en installeert
hem daarna op je telefoon als app, met eigen icoon en ook offline bruikbaar.

## 1. Op GitHub zetten (op een computer, of in de browser van je telefoon)
1. Maak een gratis account op https://github.com (kies "Sign up").
2. Klik rechtsboven op "+" en dan "New repository".
3. Naam: werkplanner. Kies "Public". Klik "Create repository".
   (Er staat alleen code in, geen persoonlijke gegevens. Je rooster blijft op je telefoon.)
4. Klik "uploading an existing file" en sleep deze 5 bestanden erin (uit de uitgepakte zip):
   index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png
   Sleep dus de bestanden, niet de map of de zip.
5. Klik onderaan op "Commit changes".

## 2. GitHub Pages aanzetten
1. Ga in je repository naar Settings > Pages.
2. Bij "Build and deployment" kies je Source: "Deploy from a branch".
3. Branch: main, map: / (root). Klik Save.
4. Wacht 1 tot 2 minuten. Bovenaan de Pages-instelling verschijnt je adres:
   https://JOUWNAAM.github.io/werkplanner/

## 3. Installeren op je Android-telefoon
1. Open dat adres in Chrome op je telefoon.
2. Tik op het menu (drie puntjes) en kies "App installeren" (of "Toevoegen aan startscherm").
3. Bevestig. Het icoon staat nu op je startscherm en opent als gewone app.

## Bijwerken
Upload bij een nieuwe versie de nieuwe bestanden (Add file > Upload files, zelfde namen).
De app haalt de nieuwste versie op zodra je online bent. Bij problemen: verhoog in sw.js
het getal in VERSIE (bijvoorbeeld v1 naar v2).

## Let op
- Alle gegevens staan lokaal in de browser van je telefoon. Maak af en toe een back-up
  (Instellingen > Back-up opslaan). Browsergegevens wissen verwijdert je rooster.
- Deze webapp kan geen popupmeldingen plannen. Automatische sync met Google Agenda kan wel: zie GOOGLE-AGENDA-KOPPELEN.md.
  Daarnaast is er per dienst een knop "＋Agenda" en kun je de periode als CSV exporteren.

## Google Agenda automatisch synchroniseren
Zie GOOGLE-AGENDA-KOPPELEN.md (eenmalig een eigen Client-ID aanmaken bij Google, ca. 10 minuten).

## Back-up naar Google Drive of OneDrive
- Instellingen > "Delen: Drive of OneDrive" opent het deelmenu van je telefoon. Kies daar Google Drive
  of OneDrive (de app moet geïnstalleerd zijn). Ondersteunt je browser delen niet, gebruik dan
  "Back-up opslaan" en upload het bestand zelf.
- Terugzetten: Instellingen > "Back-up laden" en kies het bestand uit Drive of OneDrive.
