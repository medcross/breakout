# Aufgabe 8

Der Ball soll natürlich nicht immer in die gleiche Richtung gehen, wenn er auf den Schläger trifft.

## Schritt 1 - Berechnung des Abstands vom Ball zur Mitte der Plattform

Bei Breakout gilt die Regel: *Umso weiter außen der Ball vom Schläger getroffen wurde, umso stärker geht der Ball in x-Richtung.*

Um dieses Verhalten zu Implementieren, muss der Abstand vom Ball zur Mitte der Plattform berechnet werden.

### Aufgabe

Berechne den Abstand in der Callbackfunktion `hitPaddle` und setze die Geschwindigkeit des Balls in x-Richtung.

Die Funktion zum Setzen der Geschwindigkeit *(Velocity)* lautet:

```javascript
// distance ist die zu berechnende Distanz
ball.setVelocityX(10 * distance);
```

Ist der Ball genau in der Mitte aufgekommen, verwende folgenden Ausdruck. Der Ball geht dann in eine zufällige Richtung:

```javascript
ball.setVelocityX(2 + Math.random() * 8);
```

Denke daran, dass der Abstand immer positiv sein muss. Um dies sicherzustellen, musst du über eine `if` Bedingung prüfen, ob der Ball sich links oder rechts des Schlägers befindet.

Außerdem kann es sein, dass der Ball zufällig mittig getroffen worden ist.

**Es gibt also insgesamt drei Bedingungen.**

Mit einem `else` kann man auf das nicht Eintreffen einer Bedingung prüfen:

```javascript
const gewonnen = false;

if (gewonnen) {
    // Die Bedingung ist nicht erfüllt
    console.log("Du hast gewonnen!");
} else {
    // Die Bedingung ist erfüllt, da die obere Bedingung falsch ist
    console.log("Du hast verloren :-(");
}
```

<details>
<summary>Tipp</summary>

Der Abstand zwischen Schläger und Ball ist folgenderweise zu berechnen:

```javascript
const distance = ball.x - paddle.x;
```

***
</details>

<details>
<summary>Lösung</summary>

```javascript
function hitPaddle(ball, paddle) {
    const distance = ball.x- paddle.x;
    
    if (distance === 0) {
        ball.setVelocityX(2 + Math.random() * 8);
    } else {
        ball.setVelocityX(10 * distance);
    }
}
```

***
</details>

## Schritt 2

Wenn das Spiel noch nicht gestartet ist, bewegt sich der Ball bereits von der Plattform herunter.

Dies liegt an der Implementierung der `hitPaddle` Funktion.

### Aufgabe

Überprüfe in der `hitPaddle` Funktion, ob das Spiel bereits gestartet worden ist.

<details>
<summary>Lösung</summary>

```javascript
function hitPaddle(ball, paddle) {
    if (isGameStarted) {
        const distance = ball.x - paddle.x;

        if (distance === 0) {
            ball.setVelocityX(2 + Math.random() * 8);
        } else {
            ball.setVelocityX(10 * distance);
        }
    }
}
```

***
</details>

### Nächste Aufgabe

[Hier](Aufgabe9.md) geht es zur nächsten Aufgabe.