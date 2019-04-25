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

Innerhalb der Funktion, in welcher der Texturatlas geladen werden soll, müssen Parameter angegeben werden.

### Aufgabe

Verwende die Methode `this.load.atlas()` zum Laden des Texurtatlasses. Der Atlas befindet sich im Verzeichnis `assets/atlas.png` zusmmane mit der entsprechenden JSON-Definintion `assets/atlas.json`.

Die Methode ist [hier](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.LoaderPlugin.html#atlas__anchor) dokumentiert. Optionale Parameter, die du auslassen kannst, sind in der Dokumentation in ekigen Klammern `[...]` hinterlegt.

*`textureXhrSettings` und `atlasXhrSettings` sind optional und zudem fortgeschrittene Parameter, die du auslassen kannst.*

**Der Parameter Key** kann beliebig benannt werden. Der Key wird benutzt, um der Ressource einen Namen zu geben. Unter dem Namen kann auf diese später wieder zugegriffen werden. **Es macht also Sinn, den Key des Atlas als Konstante abzuspeichern.**
