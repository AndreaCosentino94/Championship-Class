"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Championship = void 0;
var Championship = /** @class */ (function () {
    function Championship(champName, team) {
        this.champName = champName;
        this.teams = team;
    }
    Championship.prototype.addTeam = function (team) {
        this.teams.push(team);
    };
    //cerco i player tramite numero di maglia
    Championship.prototype.getAllPlayersByNumber = function (shirtNumber) {
        return this.teams
            .map(function (team) { return team.players.find(function (players) { return players.shirtNumber === shirtNumber; }); })
            .filter(function (players) { return players !== undefined; });
    };
    //cerco i player tramite nome
    Championship.prototype.getAllPlayersByName = function (name) {
        return this.teams
            .map(function (team) { return team.players.find(function (players) { return players.name === name; }); })
            .filter(function (players) { return players !== undefined; });
    }; /*
    getValueOfPlayers(){ //reduce: somma del valore di tutti i giocatori del team
        return this.teams.map(item => item.players.filter(item => item.value).reduce((acc, curr)=>{
            return acc + curr;
        }));
    }
    getTotalValue(){//ritorna il budget + somma del valore di tutti i calciatori
        return this.getValueOfPlayers() + budget;
    }
    getPlayerSortByValue(){//ritorna i giocatori ordinati per valore ==>metodo sort
        return this.players.sort((a:number, b:number)=>b.value - a.value);
    }*/
    return Championship;
}());
exports.Championship = Championship;
