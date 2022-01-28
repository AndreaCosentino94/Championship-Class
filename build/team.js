"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(name, players, budget) {
        this.name = name;
        this.players = players;
        this.budget = budget;
        this.name = name;
        this.players = players;
        this.budget = budget;
    }
    Team.prototype.getTotalValue = function () {
        return this.players.reduce(function (acc, _a) {
            var value = _a.value;
            return acc + value;
        }, 0);
    };
    Team.prototype.getTotalBudget = function () {
        return this.getTotalValue() + this.budget;
    };
    Team.prototype.getPlayerSortByValue = function () {
        return this.players.sort(function (a, b) { return b.value - a.value; });
    };
    return Team;
}());
exports.Team = Team;
