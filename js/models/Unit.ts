
abstract class Unit {
    protected position: Coordinate;
    protected color: String = 'red';

    constructor() {
        this.position = new Coordinate(0, 0);
    }

    public getColor() : String {
        return this.color;
    }

    public getPosition() : Coordinate{
        return this.position;
    }

    public abstract move(movement: Vector) : any;
}
