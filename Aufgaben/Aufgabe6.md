# Aufgabe 6

Der Schläger soll über den Mauszeiger bewegt werden können.

## Schritt 1 - Weitere Callbackfunktion anlegen

Im ersten Schritt soll es eine Funktion ausgeführt werden, wenn sich der Mauszeiger bewegt.

### Aufgabe

Wie bei der vorherigen Aufgabe musst du auf einen Input zurückgreifen. Das Input-Event hat den Namen `pointermove`.

**Somit ergibt sich:**

```javascript
this.input.on("pointerup", movePaddle, this);
```

Die Callback-Function hat den Parameter `pointer`, welcher Daten über die Position des Mauszeigers enthält.

<details>
<summary>Lösung</summary>

```javascript
function create() {
    // ...

    this.input.on("pointerup", movePaddle, this);
}

function movePaddle(pointer) {
    
}
```

***
</details>

## Schritt 2 - Die Funktion implementieren

Im nächsten Schritt soll die Callbackfunktion `movePaddle` implementiert werden.

### Aufgabe

Bewege den Schläger zur x-Position des Mauszeigers.

Du kannst die x-Position des Mauszeigers mit `pointer.x` herausfinden.

Auf die gleiche Weise besitzt der Schläger die Eigenschaft `paddle.x`

<details>
<summary>Lösung</summary>

```javascript
function movePaddle(pointer) {
    this.paddle.x = pointer.x;
}
```

***
</details>

## Schritt 3 - Den Ball auf dem Schläger bewegen

Vielleicht ist dir schon aufgefallen, dass der Ball sich nicht auf dem Schläger mitbewegt, wenn das Spiel noch nicht gestartet worden ist.

### Aufgabe

Behebe dieses Problem mit einer `if`-Abfrage

<details>
<summary>Lösung</summary>

```javascript
function movePaddle(pointer) {
    this.paddle.x = pointer.x;

    if (!isGameStarted) {
        this.ball.x = pointer.x;
    }
}
```

***
</details>

## Schritt 4 - Den Schläger auf das Spielfeld begrenzen

Leider bewegt sich der Schläger aus dem Spielbereich heraus, wenn man die Maus zu weit nach links oder rechts bewegt.

Der x-Wert muss also eingeschränkt werden.

### Aufgabe

Benutze die mathematische Methode `Phaser.Math.Clamp(value, min, max)`, um den Schläger auf das Spielfeld einzugrenzen.

`Clamp` prüft, ob ein Wert (`value`) zwischen den Parametern `min` und `max` liegt und verringert bzw. vergrößert diesen bei Bedarf.

**Als Breite des Schlägers gilt:**

```javascript
const paddleWidth = 52;
```

<details>
<summary>Lösung</summary>

```javascript
function movePaddle(pointer) {
    this.paddle.x = Phaser.Math.Clamp(pointer.x, paddleWidth, gameWidth - paddleWidth);

    if (!isGameStarted) {
        this.ball.x = this.paddle.x; // Nicht pointer.x !!!
    }
}
```

***
</details>

## Nächste Aufgabe

Wenn du den Ball nun vernünftig mit dem Schläger spielen kannst, [gehe direkt zur nächsten Aufgabe](Aufgabe7.md)