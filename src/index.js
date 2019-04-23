window.onload = () => {

    // Konfiguriert das Spiel
    const config = {
        type: Phaser.AUTO,
        width: 800, // Breite des Spiels
        height: 600, // Höhe des Spiels
        scene: {
            preload: preload,
            create: create,
            update: update
        },
        backgroundColor: "#18216D",
    };

    // Das Spiel wird zum Leben erwerkt.
    const game = new Phaser.Game(config);

    /* Lädt Ressourzen, die später im Spiel benötigt werden.
    Dies können z.B. Bilder sein. */
    function preload() {
    }

    // Hier können Objekte in der Szene erstellt werden.
    function create() {
    }

    function update() {
    }
};
