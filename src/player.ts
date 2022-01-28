export class Player{
 
    constructor(public name: string, public surname: string, public shirtNumber: number, public value: number){
        this.name = name;
        this.surname = surname;
        this.shirtNumber = shirtNumber;
        this.value = value;
    }
    
    toString() : string{
        return this.name +' '+ this.surname +' '+ this.shirtNumber +' '+ this.value;
    }
}
