
class Movement {
    protected startPositions: Coordinate;
    protected endPositions: Coordinate;

    protected startTime: Date;
    protected endTime: Date;

    public constructor(startPositions: Coordinate, endPositions: Coordinate, startDate: Date, endDate: Date) {
        this.startPositions = startPositions;
        this.endPositions = endPositions;
        this.startTime = startDate;
        this.endTime = endDate;
    }


    public getCurrentPositionAt(time : Date) : Coordinate {
        if (this.startTime > time) {
            throw new RangeError ('Movement has not started yet');
        }
        if (this.endTime < time) {
            throw new RangeError ('Movement has already finished')
        }
        


        return new Coordinate(0,0);
    }

    public getCurrentPosition() : Coordinate {
        return this.getCurrentPositionAt(new Date());
    }
}
