# Aufgabe 1

In der ersten Aufgabe musst du das Spielfeld konfigurieren.

## Schritt 1 - Höhe und Breite des Spielfelds setzen

Bei der Konfiguation handelt es sich meist um einen Schritt, welcher einmalig zum Laden des Spiels vorgenommen wird. Es beinhaltet u.a. das Setzen der Höhe und Breite des Spielfeldes. (Wir ändern die Größe des Spielfeldes im Laufe des Spiels nicht mehr ab)

Häufig greift man auf manche Werte zu einem späteren Zeitpunkt zurück, ändert diese aber nicht mehr. Die kann beispielsweise für eine Berechnung sein. Aus diesem Grund speichert man diese als **Konstante** ab. Ein Beispiel für eine Konstante ist in unserem Fall nicht nur die Höhe und Breite des Spielfelds, sondern es könnte auch die Kreizahl pi sein.

In Javascript werden **Konstanten** mit dem Schlüsselwort `const` gekennzeichnet. Eine Konstante hat immer einen Namen, über welchen sie angesprochen werden kann.

*Ein **Schlüsselwort** ist ein Wort, welches eine besondere Bedeutung für die Programmiersprache hat.*

**Beispiele für Konstanten:**

```javascript
const sinnDesLebens = 42; // Ganzzahl
const pi = 3.14159265359; // Dezimalzahl
const ersterWochentag = "Montag"; // Zeichenfolge
const wahr = true; // Boolscher Wert (wahr / falsch)
const falsch = false // Boolscher Wert (wahr / falsch)
```
Aus den Beispielen fällt auf, dass **Werte unterschiedlicher Typen** zwischengespeichert werden können.

Es können ebenfalls mehrere Werte zusammengefasst werden. Diese Art von Typ nennt man **JSON (Javascript Object Notation)**. Ein JSON zeichnet sich durch eine öffnende geschweifte Klammer `{` und eine schließende geschweifte Klammer `}` aus. Das JSON selbst enthält Wertepaare, welche mit einem `,` abgetrennt werden.

```javascript
const config = {
    width: 800,
    height: 600,
};
```

Der Zugriff auf einen Wert ist sehr einfacht und erfolgt über Punktnotation:

```javascript
console.log("Die Breite des Spielfelds ist:");
console.log(config.width);
```

*`console.log` gibt einen Text auf der Konsole des Webbrowsers aus.*

Ein JSON kann auch ein weiteres JSON beinhalten und komplexer sein:

```javascript
const simone = {
    vorname: "Simone",
    nachname: "Hansen",
    beruf: {
        ort: "Hamburg",
        bezeichnung: "Entwicklerin"
    }
};

console.log("Simones Berufsbezeichnung lautet:");
console.log("")
```

### Aufgabe

**Versuche nun die Höhe und Breite des Spielfelds innerhalb einer Konstanten feszulegen.** Du kannst auf Konstanten ebenfalls im JSON verweisen.

Achte beim Anlegen der Variable darauf, dass du nicht den **Gültigkeitsbereich** *(engl. Scope)* der Konstante verlässt. Außerhalb des Gültigkeitsbereichs kann auf die Variable später nicht zugegriffen werden.

Ein Gültigkeitsbereich wird durch einen **Block** defiiniert. Ein Block kennzeichnet sich durch zwei geschweifte Klammern. Beispielsweise handelt es sich hierbei um einen Block:

```javascript
const wert0 = 0;

{ // <- Anfang Block 1

    const wert1 = 1;

    function preload() { // <- Anfang Block 2
        const wert2 = 2;
        // Auf wert0, wert1 und wert2 kann zugegriffen werden
    } // <- Ende Block 2

    // Auf wert0 und wert1 kann zugegriffen werden.
} // <- Ende Block 1

// Nur auf wert 0 kann zugegriffen werden kann
```

Da Javascript-Dateien ebenfalls **von oben nach unten** eingelesen werden, gelten Variablen auch erst nach ihrer **Deklaration**.

## Schritt 2 - Hintergrundfarbe auf blau setzen

Das Spielfeld soll nun ein schönes Himmelblau bekommen.

### Aufgabe

Füge den Wert `backgroundColor` zur Konstanten `config` hinzu und setze disen auf den Wert `"#0088ff"`. Der Wert ist als Zeichenfolge angegeben und hinter ihm verbirgt sich **ein Farbcode**. Solche Farbcodes werden besonders häufig in der Webentwicklung verwendet.

## Schritt 3 - Das Spiel zum Leben erwecken

Momentan siehst du nur die Konstante `config` im Code stehen und ein paar `function`s, die im Moment jedoch noch nicht relevant sind.

Allerdings wird sich noch nicht viel tun, da wir das Spielfeld noch nicht erstellt haben.

Du musst Phaser sagen, dass es das Spiel anhan der zuvor angelegten `config` erstellen soll. Dafür musst du **ein Objekt erzeugen**.

Ein **Objekt** umfasst mehrere **Eigenschaften**. Eine Eigenschaft ist, ähnlich wie die Konstante, eine Verbindung von einem Namen und einem Wert. Außerdem kann eine Eigenschaft eine Funktion sein. Diese wird aufgrund der Bindung an das Objekt als **Methode** spezifiziert.

Ein Objekt wird mit dem Schlüsselwort `new` erstellt und wird z.B. einer Konstanten zugewisen. Dabei kann es bei der Erstellung Parameter annehmen (einzelne Werte). Mit Parametern kann man unterschiedliche Ausführungen eines Objektes erstellen.

Beim Erstellen eines Objekts wird der **Konstruktor** aufgerufen.

**Beispiel für das Erstellen eines Objekts:**

```javascript
// Ein VW, welcher 19999.99 EUR kostet, wird erstellt.
const vw = new Auto("VW", 19999.99);
// Auch ein Auto, jedoch von der Marke Fiat mit einem anderen Verkaufspreis.
const fiat = new Auto("Fiat", 5999.99);
```

**Der Konstruktor kann auch mit einem JSON umgesetzt werden:**

```javascript
const config = {
    marke: "VW",
    verkaufspreis: 19999.99
};

const vw = new Auto(config);
```

*Da du in der Session kein eigenes Objekt erstellen musst, reicht es zu wissen, wie du mit ihnen arbeiten kannst.*

### Aufgabe

Erstelle ein Objekt vom Typ `Phaser.Game` und übergebe die Konstante `config` in den Konstruktor.

Du kannst das erstellte Objekt ebenfalls in einer Konstante speichern. Z.b. einer Konstante mit dem Namen `game`.

## Schritt 4 - Erster Test

Öffne doch mal die `index.html` in einem Web-Browser deiner Wahl.

Wenn du alles richtig gemacht hast, solltest du einen hellblauen Kasten sehen.

[Hier](Aufgabe2.md) kommst du zur nächsten Aufgabe.