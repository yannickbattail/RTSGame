class Movement {
    constructor(startPositions, endPositions, startDate, endDate) {
        this.startPositions = startPositions;
        this.endPositions = endPositions;
        this.startTime = startDate;
        this.endTime = endDate;
    }
    getCurrentPositionAt(time) {
        if (this.startTime > time) {
            throw new RangeError('Movement has not started yet');
        }
        if (this.endTime < time) {
            throw new RangeError('Movement has already finished');
        }
        return new Coordinate(0, 0);
    }
    getCurrentPosition() {
        return this.getCurrentPositionAt(new Date());
    }
}
//# sourceMappingURL=Movement.js.map