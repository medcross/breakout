# Aufgabe 9

Es sieht noch nicht sehr spektakulär aus, wenn ein Spieler einen Mauerstein bricht.

Durch Partikeleffekte könnnen wir das ändern.

## Schritt 1 - Partikel zur Szene hinzufügen

### Aufgabe

Füge den Javascript Code zur `create` Funktion hinzu.

```javascript
this.particles = this.add.particles("particle1");
```

## Schritt 2 - Partikel einzeichnen

### Aufgabe

Die Partikel werden durch einen Emitter ausgegeben.

```javascript
this.particles = this.add.particles(atlasKey, "particle1");

const emitterConfig = {
    speed: {
        min: 10,
        max: 50 
    },
    quantity: { 
        min: 5,
        max: 10 
    },
    alpha: { 
        start: 1,
        end: 0 
    },
    gravityY: 200,
    lifespan: 800,
    blendMode: "SCREEN",
    on: false
}
this.particles.createEmitter(emitterConfig);
```

### Schritt 3 - Partikel beim Mauerbruch ausgeben

Wenn der Ball auf einen Mauernstei tifft, sollen die sternenförmigen Partikel ausgegeben werden.

### Aufgabe

Verwende die Methode `this.particles.emitParticleAt(<x-Postion>, <y-Position>);`

<details>
<summary>Lösung</summary>

```javascript

```

***
</details>

## Nächste Aufgabe

In der [nächsten Aufgabe](Aufgabe10.md) findest du Ideen, um das Spiel zu erweitern.