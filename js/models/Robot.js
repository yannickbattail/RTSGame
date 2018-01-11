var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Robot = /** @class */ (function (_super) {
    __extends(Robot, _super);
    function Robot() {
        var _this = _super.call(this) || this;
        _this.position = new Coordinate(0, 0);
        return _this;
    }
    Robot.prototype.move = function (movement) {
        this.position.x += movement.x;
        this.position.y += movement.y;
    };
    return Robot;
}(Unit));
//# sourceMappingURL=Robot.js.map