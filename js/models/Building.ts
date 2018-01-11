
abstract class Building {
    protected position: Coordinate;
    protected color: String = 'blue';

    constructor() {
        this.position = new Coordinate(0, 0);
    }

    public getColor(): String {
        return this.color;
    }

    public getPosition(): Coordinate {
        return this.position;
    }
}
