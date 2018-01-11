var map = new Map();
var robot1 = new Robot();
robot1.getPosition().x = 20;
robot1.getPosition().y = 30;
map.addGameElement(robot1);
robot1.move(new Vector(30, 60));
var Factory1 = new Factory();
Factory1.getPosition().x = 40;
Factory1.getPosition().y = 20;
map.addGameElement(Factory1);
map.drawGameElements();
window.setTimeout(function () {
    map.clear();
    robot1.move(new Vector(30, 60));
    map.drawGameElements();
}, 2000);
//# sourceMappingURL=rts.js.map