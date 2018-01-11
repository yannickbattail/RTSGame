class Map {
    protected MAP_SIZE_X: number = 300;
    protected MAP_SIZE_Y: number = 300;

    protected canvas: any;
    protected context: any;
    protected gameElements : Array<GameElement>;

    constructor() {
        this.gameElements = new Array<GameElement>();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.MAP_SIZE_X;
        this.canvas.height = this.MAP_SIZE_Y;
        this.clear();
    }

    protected drawBuilding(building: Building) {
        this.context.fillStyle = building.getColor();
        this.context.fillRect(building.getPosition().x, building.getPosition().y, 10, 10);
    }

    protected drawUnit(unit: Unit) {
        this.context.strokeStyle = unit.getColor();
        this.context.strokeRect(unit.getPosition().x, unit.getPosition().y, 10, 10);
    }

    protected draw(gameElement: GameElement) {
        if (gameElement instanceof Building) {
            this.drawBuilding(gameElement);
        } else if (gameElement instanceof Unit) {
            this.drawUnit(gameElement);
        } else {
            this.context.strokeStyle = 'white';
            this.context.strokeRect(gameElement.getPosition().x, gameElement.getPosition().y, 10, 10);
        }
    }

    public addGameElement(gameElement: GameElement) {
        this.gameElements.push(gameElement);
    }


    public drawGameElements() {
        for (let gameElement of this.gameElements) {
            this.draw(gameElement);
        }
    }

    public clear() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
