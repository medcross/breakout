# Aufgabe 8

Der Ball soll natürlich nicht immer in die gleiche Richtung gehen, wenn er auf den Schläger trifft.

## Schritt 1 - Berechnung des Abstands vom Ball zur Mitte der Plattform

Bei Breakout gilt die Regel: *Umso schlechter der Ball getroffen wurde, umso stärker geht der Ball in x-Richtung.*

Um dieses Verhalten zu Implementieren, muss der Abstand vom Ball zur Mitte der Plattform berechnet werden.

### Aufgabe

Berechne den Abstand in der Callbackfunktion `hitPaddle`.

Denke daran, dass der Abstand immer positiv sein muss.

Nutze dann die Methode,

```javascript
ball.setVelocityX(-10 * diff);
```

um den Ball zu bewegen.

```javascript
let diff = 0;

if (ball.x < paddle.x)
{
    //  Ball is on the left-hand side of the paddle
    diff = paddle.x - ball.x;
    ball.setVelocityX(-10 * diff);
} else if (ball.x > paddle.x) {
    //  Ball is on the right-hand side of the paddle
    diff = ball.x - paddle.x;
    ball.setVelocityX(10 * diff);
} else {
    //  Ball is perfectly in the middle
    //  Add a little random X to stop it bouncing straight up!
    ball.setVelocityX(2 + Math.random() * 8);
}
```