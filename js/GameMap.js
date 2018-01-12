class GameMap {
    constructor() {
        this.MAP_SIZE_X = 300;
        this.MAP_SIZE_Y = 300;
        this.gameElements = new Array();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.MAP_SIZE_X;
        this.canvas.height = this.MAP_SIZE_Y;
        this.clear();
    }
    drawBuilding(building) {
        this.context.fillStyle = building.getColor();
        this.context.fillRect(building.getPosition().x, building.getPosition().y, 10, 10);
    }
    drawUnit(unit) {
        this.context.strokeStyle = unit.getColor();
        this.context.strokeRect(unit.getPosition().x, unit.getPosition().y, 10, 10);
    }
    draw(gameElement) {
        if (gameElement instanceof Building) {
            this.drawBuilding(gameElement);
        }
        else if (gameElement instanceof Unit) {
            this.drawUnit(gameElement);
        }
        else {
            this.context.strokeStyle = 'white';
            this.context.strokeRect(gameElement.getPosition().x, gameElement.getPosition().y, 10, 10);
        }
    }
    addGameElement(gameElement) {
        this.gameElements.push(gameElement);
    }
    drawGameElements() {
        for (let gameElement of this.gameElements) {
            this.draw(gameElement);
        }
    }
    clear() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
//# sourceMappingURL=GameMap.js.map