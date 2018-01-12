class Robot extends Unit {
    constructor() {
        super();
        this.position = new Coordinate(0, 0);
    }
    move(movement) {
        this.position.x += movement.x;
        this.position.y += movement.y;
    }
}
//# sourceMappingURL=Robot.js.map