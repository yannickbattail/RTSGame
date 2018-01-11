var Map = /** @class */ (function () {
    function Map() {
        this.MAP_SIZE_X = 300;
        this.MAP_SIZE_Y = 300;
        this.gameElements = new Array();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.MAP_SIZE_X;
        this.canvas.height = this.MAP_SIZE_Y;
        this.clear();
    }
    Map.prototype.drawBuilding = function (building) {
        this.context.fillStyle = building.getColor();
        this.context.fillRect(building.getPosition().x, building.getPosition().y, 10, 10);
    };
    Map.prototype.drawUnit = function (unit) {
        this.context.strokeStyle = unit.getColor();
        this.context.strokeRect(unit.getPosition().x, unit.getPosition().y, 10, 10);
    };
    Map.prototype.draw = function (gameElement) {
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
    };
    Map.prototype.addGameElement = function (gameElement) {
        this.gameElements.push(gameElement);
    };
    Map.prototype.drawGameElements = function () {
        for (var _i = 0, _a = this.gameElements; _i < _a.length; _i++) {
            var gameElement = _a[_i];
            this.draw(gameElement);
        }
    };
    Map.prototype.clear = function () {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Map;
}());
//# sourceMappingURL=Map.js.map