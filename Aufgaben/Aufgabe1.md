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
const falsch = false; // Boolscher Wert (wahr / falsch)
```
Aus den Beispielen fällt auf, dass **Werte unterschiedlicher Typen** zwischengespeichert werden können.

Es können ebenfalls mehrere Werte zusammengefasst werden. Diese Art von Typ nennt man **JSON (Javascript Object Notation)**. Ein JSON zeichnet sich durch eine öffnende geschweifte Klammer `{` und eine schließende geschweifte Klammer `}` aus. Das JSON selbst enthält Wertepaare, welche mit einem `,` abgetrennt werden.

```javascript
const config = {
    width: 800,
    height: 600
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
console.log(simone.beruf.bezeichnung);
```

### Aufgabe

**Versuche nun die Höhe und Breite des Spielfelds innerhalb einer Konstanten feszulegen.** Du kannst Konstanten ebenfalls im JSON als Wert einsetzen.

Achte beim Anlegen der Konstante darauf, dass du nicht den **Gültigkeitsbereich** *(Scope)* der Konstante verlässt. Außerhalb des Gültigkeitsbereichs kann auf die Konstante später nicht zugegriffen werden.

Ein Gültigkeitsbereich wird durch einen **Block** defiiniert. Ein Block kennzeichnet sich, wie das JSON, durch zwei geschweifte Klammern.

**Beispiel für den Scope einer Konstante:**

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

<details>
<summary>Lösung</summary>

```javascript
const gameWidth = 800; // Breite des Spiels
const gameHeight = 600; // Höhe des Spiels

const config = {
    type: Phaser.AUTO,
    width: gameWidth, 
    height: gameHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
```

</details>

## Schritt 2 - Hintergrundfarbe des Spielfelds ändern

Das Spielfeld soll nun einen schwarzgrünen Hintergrund bekommen.

### Aufgabe

Füge den Wert `backgroundColor` zur Konstanten `config` hinzu und setze disen auf den Wert `"#31403d"`. Der Wert ist als Zeichenfolge angegeben und hinter ihm verbirgt sich ein Farbcode. Solche Farbcodes werden besonders häufig in der Webentwicklung verwendet.

<details>
<summary>Lösung</summary>

```javascript
const config = {
    type: Phaser.AUTO,
    width: gameWidth, 
    height: gameHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: "#31403d"
};
```

</details>

## Schritt 3 - Das Spiel zum Leben erwecken

Momentan siehst du nur die Konstante `config` im Code stehen und ein paar `function`s, die im Moment jedoch noch nicht relevant sind.

Allerdings wird sich noch nicht viel tun, da wir das Spielfeld noch nicht erstellt haben.

Du musst Phaser sagen, dass es das Spiel anhan der zuvor angelegten `config` erstellen soll. Dafür musst du **ein Objekt erzeugen**.

Ein **Objekt** umfasst mehrere **Eigenschaften**. Eine Eigenschaft ist, ähnlich wie die Konstante, eine Verbindung von einem Namen und einem Wert. Außerdem kann eine Eigenschaft eine Funktion sein. Diese wird aufgrund der Bindung an das Objekt als **Methode** spezifiziert.

Ein Objekt wird mit dem Schlüsselwort `new` erstellt und kann z.B. einer Konstanten zugewisen werden. Bei der Erstellung eines Objektes können Parameter übergeben werden. Mit Parametern kann man unterschiedliche Ausführungen eines Objektes erstellen.

Beim Erstellen eines Objekts wird der **Konstruktor einer Klasse** aufgerufen.

Eine **Klasse** definiert die Eigenschaften eines **Objekts**. Sie ist die Definition einer Vorlage von **Variablen** und **Methoden** eines Objekts.

*Zusammenfassend definiert die Klasse Eigenschaften eines Objekts. Methoden sind Funktionen, die zu einer bestimmten Klasse gehören. Wenn man eine Klasse mit `new` erstellt, so entsteht ein Objekt. Auf das Objekt kann zur Laufzeit des Programms zugegriffen werden.*

*Da du in der Session keine eigenen Klassen programmieren musst, reicht es zu wissen, wie du eine Instanz der Klasse (ein Objekt) erstellen kannst.*

**Beispiel für das Instanziieren einer Klasse:**

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

### Aufgabe

Erstelle ein Objekt vom Typ `Phaser.Game` und übergebe die Konstante `config` in den Konstruktor.

Du kannst das erstellte Objekt ebenfalls in einer Konstante speichern. Z.b. einer Konstante mit dem Namen `game`.

<details>
<summary>Lösung</summary>

```javascript
const game = new Phaser.Game(config);
```

</details>

## Schritt 4 - Erster Test

Öffne doch mal die `index.html` in einem Web-Browser deiner Wahl.

Wenn du alles richtig gemacht hast, solltest du einen schwarzgrünen Kasten auf dunklem Hintergrund sehen.

<details>
<summary>Gesamtlösung</summary>

```javascript
const gameWidth = 800; // Breite des Spiels
const gameHeight = 600; // Höhe des Spiels

// Konfiguriert das Spiel
const config = {
    type: Phaser.AUTO,
    width: gameWidth, 
    height: gameHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: "#31403d"
};

const game = new Phaser.Game(config);

function preload() {
}

function create() {
}

function update() {
}
```

</details>

## Nächste Aufgabe

[Hier](Aufgabe2.md) kommst du zur nächsten Aufgabe.