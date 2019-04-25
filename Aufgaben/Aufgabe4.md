# Aufgabe 4

Im nächsten Schritt soll der Ball eingebaut werden.

## Schritt 1 - Den Ball zeichnen

Wie zuvor auch, solltest du jetzt den Ball zum Spiel hinzufügen. Der Ball hat den Namen `ball1`.

Der Ball soll anfangs über der Plattform angezeigt werden.

**Tipp:** Zeichne den Ball vor den beiden von dir erstellten for-Schleifen ein.

## Schritt 2 - Der Ball soll abprallen

Es ist wichtig, dass der Ball den Spielrändern, den Plattformen und dem Schläger abprallt. Dafür solltest du den Ball zuvor in einer Variable abgespeichert haben.

Rufe nun auf das Objekt des Balls die Methode `setCollideWorldBounds(true)` und danach die Methode `setBounce(1)` auf.

Weiterhin müssen die Ränder am Spielrahmen auf den Ball Einfluss nehmen.

Setze dafür die Kollision beim `world`-Bojekt:

```javascript
 this.physics.world.setBoundsCollision(true, true, true, false);
```

Außerdem soll der Ball von dem Schläger abprallen.

Nutze hierfür die folgende Methode ([Link zur Dokumentation](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html)):

```javascript
this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);
```

`this.hitPaddle` ist eine Funktion, die beim Auftreffen des Balls auf den Schläger aufgerunfen wird. Eine solche Funktion wird auch als **Callback** bezeichnet. Ein Callback ist eine Funktion, die als Parameter in eine andere Funktion übergeben wird. Bei Bedarf kann das Callback ausgeführt werden.

Erstelle aus diesem Grund eine neue Funktion mit dem Namen `hitPaddle` oder wähle einen eigenen Funktionsnamen.

Die Funktion bleibt vorerst leer.
