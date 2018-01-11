var Movement = /** @class */ (function () {
    function Movement(startPositions, endPositions, startDate, endDate) {
        this.startPositions = startPositions;
        this.endPositions = endPositions;
        this.startTime = startDate;
        this.endTime = endDate;
    }
    Movement.prototype.getCurrentPositionAt = function (time) {
        if (this.startTime > time) {
            throw new RangeError('Movement has not started yet');
        }
        if (this.endTime < time) {
            throw new RangeError('Movement has already finished');
        }
        return new Coordinate(0, 0);
    };
    Movement.prototype.getCurrentPosition = function () {
        return this.getCurrentPositionAt(new Date());
    };
    return Movement;
}());
//# sourceMappingURL=Movement.js.map