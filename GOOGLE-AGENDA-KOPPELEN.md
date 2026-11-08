# Google Agenda koppelen (automatische sync)

Je maakt eenmalig een eigen, gratis "Client-ID" bij Google. Dat is nodig omdat een webapp zonder server
niet zomaar in je agenda mag schrijven. Reken op ongeveer 10 minuten. Je doet dit op een computer.

## 1. Project maken
1. Ga naar https://console.cloud.google.com en log in met je Google-account.
2. Klik bovenaan op de projectkiezer > "Nieuw project". Naam: Werkplanner. Klik "Maken".

## 2. Google Calendar API aanzetten
1. Menu > "API's en services" > "Bibliotheek".
2. Zoek "Google Calendar API" en klik op "Inschakelen".

## 3. Toestemmingsscherm (OAuth)
1. Menu > "API's en services" > "OAuth-toestemmingsscherm" (of "Google Auth Platform").
2. Gebruikerstype: "Extern". App-naam: Werkplanner. Vul je e-mailadres in als ondersteunings- en contactadres.
3. Bij "Testgebruikers" voeg je je eigen Gmail-adres toe (het account waarvan je de agenda wilt gebruiken).
4. Laat de app in de status "Testen". Publiceren is niet nodig voor eigen gebruik.
5. Bij "Scopes" (bereiken) voeg je toe, als dat wordt gevraagd:
   - .../auth/calendar.events
   - .../auth/calendar.calendarlist.readonly

## 4. Client-ID maken
1. Menu > "API's en services" > "Inloggegevens" > "Inloggegevens maken" > "OAuth-client-ID".
2. Toepassingstype: "Webtoepassing". Naam: Werkplanner web.
3. Bij "Geautoriseerde JavaScript-bronnen" klik je "URI toevoegen" en vul je in:
   https://JOUWNAAM.github.io
   Alleen dit adres, zonder /werkplanner erachter en zonder slash aan het eind.
   Een omleidings-URI (redirect) is niet nodig.
4. Klik "Maken". Kopieer de Client-ID (eindigt op .apps.googleusercontent.com).

## 5. In de app koppelen
1. Open de app, Rooster > kaart "Google Agenda (automatisch)".
2. Plak de Client-ID in het veld en tik op "Verbinden / agenda kiezen".
3. Kies je Google-account. Er verschijnt "Google heeft deze app niet geverifieerd". Dat is normaal bij een eigen
   app in testmodus: tik op "Geavanceerd" en dan "Doorgaan naar Werkplanner", en geef toestemming.
4. Kies in de lijst de agenda waarin de diensten moeten komen (een aparte agenda "Werkrooster" is handig; die maak
   je eerst in Google Agenda aan). De app zet daarna je diensten in die agenda.

## Hoe de automatische sync werkt
- Na een wijziging in de app wordt die binnen enkele seconden naar Google Agenda geschreven (van een week terug tot
  4 maanden vooruit): nieuwe, gewijzigde en verwijderde diensten.
- Een inlog van Google blijft ongeveer een uur geldig. Is hij verlopen (bijvoorbeeld als je de app opnieuw opent),
  dan staat er een melding en tik je één keer op "Nu synchroniseren". Dat opent kort het Google-venster en
  stuurt alles door. Echt volledig op de achtergrond kan een webapp dit niet; de Android-app wel.
- Wijzig of verwijder je in Google Agenda een dienst, dan zie je dat na "Nu synchroniseren" of
  "Wijzigingen ophalen" op de kaart. Je tikt op "Wijzigingen overnemen" om ze in de app te zetten. Zo wordt
  er niets stilletjes in je rooster veranderd.
- Verander je dezelfde dag in beide, dan wint de app.

## Problemen
- "Fout 400: origin_mismatch": het adres bij "Geautoriseerde JavaScript-bronnen" klopt niet. Het moet exact
  https://JOUWNAAM.github.io zijn.
- "Toegang geblokkeerd" of "geen toegang": voeg je Gmail-adres toe als testgebruiker (stap 3.3).
- Niets gebeurt bij het inloggen: sta pop-ups toe voor je GitHub Pages-adres in Chrome.
- De Client-ID is geen geheim wachtwoord, maar deel hem ook niet onnodig. Hij staat alleen in je eigen app.
