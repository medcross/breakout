const gameWidth = 800; // Breite des Spiels
const gameHeight = 600; // Höhe des Spiels

const atlasKey = "atlas";

const bricksPerRow = 10;
const numberOfRows = 4;

const brickHeight = 32;
const brickWidth = 64;
const bricksYOffset = 10 + brickHeight / 2;
const bricksXOffset = (gameWidth - brickWidth * bricksPerRow) / 2 + brickWidth / 2;

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
    physics: {
        default: "arcade"
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
    this.physics.world.setBoundsCollision(true, true, true, true);

    this.paddle = this.physics.add.image(400, 500, atlasKey, "paddle1");

    for (let j = 0; j < numberOfRows; j++) {
        for (let i = 0; i < bricksPerRow; i++) {
            this.physics.add.image(bricksXOffset + i * brickWidth, bricksYOffset + j * brickHeight, atlasKey, "blue1");
        }
    }
}

function update() {
}