# M295 Leistungsbeurteilung B
Name: To-do-Liste API
Autor: Marco Matteo
## Einrichtung:
1. Lade das Repository herunter.
2. Stelle sicher, dass Docker installiert ist und läuft.
3. Öffne den Ordner in VS Code dann wählen sie öffne erneut in einem Node.js-Javascript-Container.
4. Führe npm install aus.
5. Führe npm run start aus.
6. Öffne einen Client wie Hoppscoth oder Postman um später Requests auszuführen.
7. Für die API-Spezifikation öffnen sie in einem Browser: http://localhost:3000/swagger-ui/
## Start:
1. Jetzt muss man sich anmelden um einen cookie zu erhalten der alle requests überhaupt zur verfügung stellt. mann muss einen POST-request machen names /login mir einem Body der ungefähr so aussieht:
{
    "email": "vorname@blabla.com",
    "password": "m295"
}
Ausgabe: {email: vorname@blabla.com}
2. Das Password muss m295 sein die E-Mail allerdings ist dem Nutzter überlassen und mann kann eingeben was man will. Solange man überhaupt etwas eingibt.
## Funktionen
1. Jetzt ist ist alles freigeschaltet. In der Spezifikation kann man die einzelnen Befehle eingeben. Zu empfehlen ist es allerdings erstmal eine Task zu erstellen denn es hat keine vorprogrammierten Beispieltasks. Also machen sie eine POST request mit /tasks. Nur ein Name ist benötigt der Rest wird automatisch gegeben.

bsp. Body:
{
    "name": "clean the bathroom"
}

Ausgabe: liste aller aktuellen tasks.
2. Wenn ausversehen sich ein kleiner fehler eingeschlichen hat kann man mit einer einfachen PATCH-request änderungen an einer task durchführen. Um zu sagen welche Task man ändern will muss man in der URL anschliessend an /task noch die task_id des objektes mitgeben. Im body benötigt man mindestes eines der sachen die man ändern will z.B.
{
    "name": "Gehe in die Ferien"
}
oder
{
    "done_at": "22.12.2023"
}
3. Für das löschen einer Aufgabe kann man DELETE verwenden. DELETE bracht keinen Body sondern man muss nur in der URL die task_id mirgeben.
4. Lesen sie die Spezifikation unter http://localhost:3000/swagger-ui/

## Autentifizierung
1. Um deinen Status zu überprüfen, kann man eine GET-Request unter der Adresse: localhost:3000/verify machen. wenn die email zurückkommt heisst das, dass ihr Cookie noch Aktiv ist.
2. Um auszuloggen, verwende einen DELETE-Request unter der Adresse: localhost:3000/logout.