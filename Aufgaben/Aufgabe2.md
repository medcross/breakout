# Aufgabe 2

In der zweiten Aufgabe sollen der Ball, die Mauern und der Schläger eingezeichnet werden. Diese Bilder werden in Spielen häufig als Textur bezeichnet.

## Schritt 1 - Laden der Texturen

Die benötigten Textureren müssen in einer entsprechenden **Funktion** einmalig geladen werden. Die Funktion ist bereits angelegt, jedoch ohne Inhalt.

Eine **Funktion** enthält eine Reihe von Anweisungen, um eine Aufgabe auszuführen oder einen Wert auszurechnen. Wird ein Wert ausgerechnet, so ist dieser mit dem Schlüsselwort **return** auszugeben.

Weitherin kann eine **Funktion mit Parametern** aufgerufen werden. Ein Parameter, beispielsweise eine Zahl, kann bei jedem Aufruf der Funktion mitgegeben werden. Parameter machen eine Funktion wiederverwendbar.

```javascript
/*
Diese Funktion berechnet die Summe aus a und b.
Das Ergebnis der Berechnung wird zurückgegeben.
*/
function calc(a, b) {
    return a + b; // Berechnung von a + b
}

// Diese Funktion gibt Hallo aus, gibt aber nichts zurück.
function sayHello() {
    // .log ist ebenfalls eine Funktion mit einem Parameter
    console.log("Hallo");
}
```

*Im Beispiel sind Textanmerkungen zu erkennen. In Javascript kann man seinen Code mit Hilfe von Anmerkungen dokumentieren. Dabei wird zwischen dem **mehrzeiligen Blockkommentar ( \*/ ... \*/ )** und dem **einzeiligen Kommentar ( // ... )** unterschieden.*

Alle Texturen befinden sich zusammengefasst in einem Atlas, welcher das Laden vereinfacht. Ein Texturatlas umfasst mehrere, aneinandergereihte Bildtexturen. Um Phase zu sagen, wie die Bilder aneinandergereiht sind, ist eine Datei vom Typ JSON hinterlegt. Das JSON enthält alle benötigten Informationen.

Das Framework bietet uns behilfliche **Klassen** an, welche entsprechende **Methoden** bereitstellen. So gibt es auch eine Klasse zum Laden von Ressourzen wie u.a. Texturen. Dies ist die `Phaser.Loader`-Klasse. Diese Klasse unterteilt sich wiederum in meherere Methoden.

*(Klassen, Objekte und Methoden wurden bereits in Aufgabe 1 angesprochen)*

### Aufgabe

Verwende die Methode `this.load.atlas()` zum Laden des Texurtatlasses. Der Atlas befindet sich im Verzeichnis `assets/atlas.png` zusmmane mit der entsprechenden JSON-Definintion `assets/atlas.json`.

Die Methode ist [hier](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.LoaderPlugin.html#atlas__anchor) dokumentiert. Optionale Parameter, die du auslassen kannst, sind in der Dokumentation in ekigen Klammern `[...]` hinterlegt.

*`textureXhrSettings` und `atlasXhrSettings` sind optional und zudem fortgeschrittene Parameter, die du auslassen kannst.*

**Der Parameter Key** kann beliebig benannt werden. Der Key wird benutzt, um der Ressource einen Namen zu geben. Unter dem Namen kann auf diese später wieder zugegriffen werden. **Es macht also Sinn, den Key des Atlas als Konstante abzuspeichern.**

## Schritt 2 - Den Schläger hinzufügen

Natürlich wollen wir die Bilder nun verwenden. Im ersten Schritt sollst du nun den Schläger auf das Spielfeld bringen. Der Schläger ist beim klassischen Breakout-Spiel am unteren Rand vorzufinden und kann nach links und rechts bewegt werden.

### Aufgabe A

Suche nach einem passenden Textur für den Schläger in der `atlas.json`. Der englische Begriff für Schläger ist `paddle`.

```json
"paddle1":
{
    "frame": {"x":386,"y":36,"w":104,"h":24},
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {"x":0,"y":0,"w":104,"h":24},
    "sourceSize": {"w":104,"h":24}
}
```

### Aufgabe B

Der Schläger soll zusätzlich physikalische Eigenschaften besitzen, da er später den Ball abstoßen soll. Es handelt sich also um eine **Kollisionserkennung**. Daher müssen wir auf die Klasse `Phaser.Physics.Arcade` zugreifen.

Arcade ist eine simple Physikeinstellung, bei der lediglich auf die Kollision zweier Spielobjekte geprüft werden kann. Beispielsweise, ob der Schläger den Ball berührt.

Um die Klasse zu instanziieren müssen wir die Physik-Einstellungen im `config`-Objekt festlegen. Füge dem JSON daher folgende Eigenschaft hinzu:

```json
physics: {
    default: "arcade"
}
```

### Aufgabe C

Versuche nun den Schläger am unteren Bildschirmrand einzuzeichen. Dafür musst die Klasse `Phaser.Physics.Arcade.Image` instanziieren und im Konstruktor die richtigen Parameter mitgeben.

Glücklicherweise bietet uns Phaser mit der Klasse `Phaser.Physics.Arcade.Factory` eine große Hilfe an. Eine **Factory** Klasse ähnelt einem Konstruktor und kann ebenfalls Klassen instanziieren. Allerdings ruft 

Im Folgenden sollst du eine solche Methode verwenden. Die Methode instanziiert das [`Phaser.Physics.Arcade.Image`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Image.html) für dich, ohne dass du dich mit komplizierten Parametern rumschlagen musst. 

Benutze [`this.physics.add.image()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html#image__anchor) mit den entsprechenden Parametern. Bei den Parametern `x` und `y` kannst du dich an den bereits erstellten `gameWidth` und `gameHeight` Konstanten bedienen.

**`this`** ist eine Schlüsselwort in Javascript, welches auf den Inhaber (Owner) einer Methode verweist. Aus diesem Grund können wir mit `this` auch auf Methoden von Phaser zugreifen.

Um den Schläger mittig zu platzieren, kannst du einen mathematische Division vornehmen. Dafür musst du einen **Operator** verwenden, wie im Matheunterricht.

**Beispiele für Operatoren:**

- `+` *plus*
- `-` *minus*
- `*` *mal*
- `/` *geteilt*

Am Ende sollte der Schläger mittig, am unteren Bildrand zu sehen sein.

### Aufgabe D

Auf den Schläger wollen wir im weiteren Verlauf noch häufiger zugreifen können. In erster Linie würde man jetzt denken, dass eine Konstante dafür ausreichen würde. Allerdings müssten wir die Konstante bereits vor dem Aufruf der `create`-Funktion definieren, um auch aus anderen Funktionen auf sie zugreifen zu können.

**Veranschaulichung des Problems:**

-   ```javascript
    function create() {
        const paddle = this.physics...
    }

    function update() {
        paddle.move(); // Auf Paddle kann nicht zugegriffen werden!
    }
    ```
-   ```javascript
    const paddle; // Eine Konstante muss initialisiert werden!
    
    function create() {
        paddle = this.physics...
    }

    function update() {
        paddle.move();
    }
    ```

**Problemlösung:**

Da die Methoden `preload`, `create` und `update` alle aus dem gleichen Kontext aufegrufen werden, können wir dem aufrufenden Objekt mit `this.<Variablenname>` eine neue **Variable** zuweisen.

**Beispiel:**

```javascript
function create() {
    this.paddle = this.physics...
}
```

Alternativ könnte man eine Variable außerhalb der Funktionen mit dem Schlüsselwort `let` erstellen.

**Beispiel:**

```javascript
let paddle;

function create() {
    paddle = this.physics...
}
```

*Du kannst dich für eine der beiden Varianten frei entscheiden.*

[Hier](Aufgabe3.md) wirst du die nächsten Texturen einzeichnen.