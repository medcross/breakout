const gameWidth = 800; // Breite des Spiels
const gameHeight = 600; // Höhe des Spiels

const atlasKey = "atlas";

const paddleYPos = 500;

const bricksPerRow = 10;
const numberOfRows = 4;

const brickHeight = 32;
const brickWidth = 64;
const bricksYOffset = 50 + brickHeight / 2;
const bricksXOffset = (gameWidth - brickWidth * bricksPerRow) / 2 + brickWidth / 2;

const ballHeight = 22;

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
    },
    backgroundColor: "#31403d"
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

    this.paddle = this.physics.add.image(gameWidth / 2, paddleYPos, atlasKey, "paddle1");
    this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);

    this.ball = this.physics.add.image(gameWidth / 2, paddleYPos - ballHeight, atlasKey, "ball1");
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);

    for (let xj = 0; xj < numberOfRows; xj++) {
        for (let xi = 0; xi < bricksPerRow; xi++) {
            const brick = this.physics.add.image(
                bricksXOffset + xi * brickWidth,
                bricksYOffset + xj * brickHeight,
                atlasKey,
                "blue1"
            );
            this.physics.add.collider(this.ball, brick, this.hitBrick, null, this);
        }
    }
}

function update() {
}

function hitPaddle(ball, paddle) {

}

function hitBrick(ball, brick) {

}