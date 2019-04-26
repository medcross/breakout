# JavaScript I (Grundlagen der Webentwicklung)

**Herzlich willkommen** beim Javascript Grundlagen Tutorium am 27.04.2019!

Dich wird in den kommenden **drei Stunden** ein spannendes Programm erwarten, bei dem du **selber mitmachen** kannst. Am Ende der Session kann jeder Teilnehmer ein Endergebnis mit nach Hause nehmen, welches sich für einen Programmiereinsteiger sehen lässt.

## Agenda

1. Vorstellung der Tutoren
1. Grundlegende Einführung in die Programmierung mit Javascript
1. Gruppenbildung
1. Einrichtung des Laptops und des Starter-Projekts
1. Lösen einer Programmieraufgabe (mit entsprechender Unterstützung durch die Tutoren)
1. Vorstellung der Ergebnisse (Rundgang)
1. Abschluss und Ausblick

## Was heute wichtig ist

- Ein guter Teamgeist
- Spaß und Interesse an der Programmierung
- Nachfragen, wenn man mal nicht weiter kommt
- Nicht gleich zu große Ziele setzen
- Auch ein unfertiges Ergebnis ist sehenswert

## Einrichtung des Laptops und des Starter-Projekts

Für die Session müssen folgende Dinge auf den Laptops installiert sein:

- [NodeJs](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/) *(oder einen andereren Editor)*

## Hilfestellungen

In der Gruppe könnt und sollt ihr auf die folgenden Hilfestellungen zurückgreifen. Sie dienden als Nachschlagwerk für die Informationen. Solltet ihr trotzdem einmal nicht weiterkommen, könnt ihr sehr gerne bei den Tutoren nachfragen.

# Breakout 2D Game - Javascript Session

In diesem Projekt wirst du ein 2d Breakout-Spiel mit dem [Phaser-Framework](https://photonstorm.github.io/phaser3-docs/) entwickeln.

## Projektstruktur

Bei den Dateien mit der Endung `.md` handelt es sich um die Aufgaben und die "Lies mich"-Datei (Readme).

Die `index.html` beinhaltet die Seitenstruktur. Im so genannten `<head>` werden die Javascript-Dateien eingebunden. Die `index.html` muss nicht weiter angepasst werden.

Der eigentliche Programmcode wird in die `index.js` im `src`-Verzeichnis geschrieben. Die bezeichnunngs `src` steht für Source *(Quellcode)*. Im Ordner `lib` ist das Spiele-Framework *Phaser* hinterlegt. Dieses wird beim Aufrufen der Website ebenfalls geladen. Das `.min.js` in der Dateiendung deutet auf ein komprimiertes Javascript hin. Komprimiert bedeutet, dass Leerzeichen und Absätze aus der Datei entfernt wurden, damit diese schneller vom Browser interpretiert werden kann.

## Im Browser bereitstellen

Führe den Befehl `npm run start` aus. Du kannst nun auf das Spiel unter `http://localhost:8080/` im Webbrowser zugreifen.
 
## Aufgaben

Du hast bestimmt schon bemerkt, dass die `index.js` im `src`-Verzeichnis bereits Code enthält. Dieser ist aber noch nicht vollständig und muss erweitert werden.

Zu der ersten Aufgabe gelangst du [hier](Aufgaben/Aufgabe1.md). Arbeite die Aufgaben schrittweise ab.