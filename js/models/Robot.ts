
class Robot extends Unit{

    constructor() {
        super();
        this.position = new Coordinate(0, 0);
    }

    public move(movement: Vector) : any {
        this.position.x += movement.x;
        this.position.y += movement.y;
    }
}
