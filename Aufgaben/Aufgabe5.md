# Aufgabe 5

Der Ball soll sich natürlich auch bewegen.

## Schritt 1 - Das Spiel mit Mausklick starten

Wenn der Spieler bereit ist, soll er anhand eines Mausklicks das Spiel starten.

### Aufgabe

Verwende die [`Phaser.Input.InputPlugin` Klasse](https://photonstorm.github.io/phaser3-docs/Phaser.Input.InputPlugin.html) und nutze dessen `on`-Methode:

`this.input.on(event, callbackFn [, context])` mit `this` als `context`, um in der Funktion auf den Phaser Kontext zugreifen zu können. Das `event` hat den Namen `"pointerup"`.

**Tipp:** Erstelle eine zusaätzliche Callback-Funktion namens `startGame`.

<details>
<summary>Lösung</summary>

```javascript
function create() {
    // ...

    this.input.on("pointerup", startGame, this);
}

function startGame() {

}
```

***
</details>

## Schritt 2 - Den Ball beim Spielstart in Bewegung versetzen

Wenn ein Mausklick erfolgt ist, soll der Ball von dem Schläger nach oben katapultiert werden.

**Fülle nun die Callback-Funktion `startGame` mit folgendem Inhalt:**

```javascript
function startGame() {
    this.ball.setVelocity(-75, -300);
}
```

`setVelocity` setzt die Kraft des Balls in x- und y-Richtung. Da der Ball vom Schläger aus nach oben fliegen soll, ist der Wert `-300` angegeben.

## Schritt 3 - If Bedingung einbauen

Leider kann man mehrfach in das Spielfeld klicken, wodurch man als Spieler einfach schummeln kann.

Das Spiel soll nur einmalig gestartet werden können.

Hierfür benötigt man eine **`if` Bedingung** (If steht für wenn). Innerhalb der `if` Bedingung steht ein Ausdruck, der entweder wahr (true) oder falsch (false) ist. Ist der Ausdruck wahr, wird der Block in der `if` Bedingung ausgeführt.

**Der Syntax von `if` ist:**

```javascript
const ichKannJavascript = true;

if (ichKannJavascript) {
    console.log("Wow! Du kannst ja Javascript!");
}
```

**Mit einem `!` kann der Ausdruck verneint werden:**

```javascript
const ichKannJavascript = true;

if (!ichKannJavascript) {
    console.log("Javascript ist ganz einfach zu lernen!");
}
```

### Aufgabe

Erstellen sie eine Varaible `isGameStarted` mit boolschen Wert (`true` / `false`), die prüft, ob das Spiel bereits gestartet worden ist.

- Am Anfang soll die Variable `isGameStarted` den Wert `false` haben, da das Spiel noch nicht gestartet wurde.
- Wenn das Spiel gestartet worden ist, soll `isGameStarted` den Wert `true` annehmen
- In der Funktion `startGame` soll geprüft werden, ob `isGameStarted` den Wert `false` hat.

<details>
<summary>Lösung</summary>

**Definition der Variable unterhalb der Konstanten:**

```javascript
let isGameStarted = false;
```

**`if` Bedingung:**

```javascript
function startGame() {
    if (!isGameStarted) {
        this.ball.setVelocity(-75, -300);
        isGameStarted = true;
    }
}
```

***
</details>

## Nächste Aufgabe:

Zur nächsten Aufgabe gelangst du [hier](Aufgabe6.md)