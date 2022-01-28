import { Player } from "./player";
 
export class Team{
 
    constructor(public name: string, public players: Player[], public budget: number){
        this.name = name;
        this.players = players;
        this.budget = budget;
    }
    getTotalValue(){
        return this.players.reduce((acc, {value}) => acc + value, 0);    
    }
    getTotalBudget(){//ritorna il budget + somma del valore di tutti i calciatori
        return this.getTotalValue() + this.budget;
    }
    getPlayerSortByValue(){//ritorna i giocatori ordinati per valore ==>metodo sort
        return this.players.sort((a, b)=>b.value - a.value);
    }
}
