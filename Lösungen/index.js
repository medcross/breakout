const gameWidth = 800; // Breite des Spiels
const gameHeight = 600;

const atlasKey = "atlas";

// Konfiguriert das Spiel
const config = {
    type: Phaser.AUTO,
    width: gameWidth, 
    height: gameHeight, // Höhe des Spiels
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

/* Lädt Ressourzen, die später im Spiel benötigt werden.
Dies können z.B. Bilder sein. */
function preload() {
    this.load.atlas(atlasKey, "assets/atlas.png", "assets/atlas.json");
}

// Hier können Objekte in der Szene erstellt werden.
function create() {
}

function update() {
}