import { Player } from "./player";
import { Team } from "./team";
import { Championship } from "./championship";
 
let firstPlayer: Player = new Player('Ugo','Tognazzi', 26, 41000);
let secondPlayer: Player = new Player('Ciccio','Pasticcio', 36, 25000);
let thirdPlayer: Player = new Player('Mauro','Mauri', 16, 23000);
let fourthPlayer: Player = new Player('Pino','Silvestri', 23, 12000);
 
 
let aTeam = new Team('A-Team',[firstPlayer, secondPlayer, thirdPlayer], 25000);
let firsChamp = new Championship('Uefa',[aTeam]);
//console.log(firsChamp);
let playerNumber = firsChamp.getAllPlayersByNumber(36);
//console.log(playerNumber);
let playerName = firsChamp.getAllPlayersByName('Mauro');
//console.log(playerName);
let valueTeam = aTeam.getTotalValue();
console.log(valueTeam);
let totBudget = aTeam.getTotalBudget();
console.log(totBudget);
let sortTeamByValue = aTeam.getPlayerSortByValue();
console.log(sortTeamByValue);

//npm run start ===> FOR RUN THE CODE!

