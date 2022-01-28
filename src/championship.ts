import { Team } from "./team";

export class Championship{
    public champName: string;
    public teams: Team[];

    constructor(champName:string, team: Team[]){
        this.champName = champName;
        this.teams = team;
    }
    addTeam(team: Team){
        this.teams.push(team);
    }
    //cerco i player tramite numero di maglia
    getAllPlayersByNumber(shirtNumber: number) {
        return this.teams
            .map(team=>team.players.find(players => players.shirtNumber === shirtNumber))
            .filter(players=>players !== undefined);
    }
    //cerco i player tramite nome
    getAllPlayersByName(name:string) {
        return this.teams
        .map(team=>team.players.find(players=>players.name === name))
        .filter(players=>players !== undefined);
    }
}
