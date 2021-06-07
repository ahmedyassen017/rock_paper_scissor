console.log("hi player");
// the user code area
let userChoice = prompt("please make your choice").toLowerCase();

if(userChoice === "rock" ){
    console.log(`you choose ${userChoice}`);
   
}else if(userChoice === "paper"){
    console.log(`you choose ${userChoice}`);
}else if(userChoice === "scissor"){
    console.log(`you choose ${userChoice}`);
}
 else{
         prompt("undefined, please select rock, paper or scissor");
         
    }
//the computer choosing area;

let computerChoice = Math.floor(Math.random() * 3);
if(computerChoice === 0){
        computerChoice = "rock";
        console.log(`the computer choose ${computerChoice}`);
        }else if(computerChoice === 1){
         computerChoice = "paper";
         console.log(`the computer choose ${computerChoice}`);

        }else if(computerChoice === 2){
         computerChoice = "scissor";
         console.log(`the computer choose ${computerChoice}`);

}
// the comparison code:
let compare = (choice1, choice2) =>{
    if (choice1 === choice2){
        console.log("the game is tie");
    }else if(choice1 === "human"){
        console.log()
    }
    else if(choice1 === "rock" && choice2 === "paper"){
        console.log(`${choice1} wins, ${choice2} lose`);
    }else if(choice1 === "rock" && choice2 === "scissor"){
        console.log(`${choice2} wins, ${choice1} lose`)
    }else if(choice1 === "paper" && choice2 === "scissor"){
        console.log(`${choice2} wins, ${choice1} lose`)
    }else if(choice1 === "paper" && choice2 === "rock"){
        console.log(`${choice1} wins, ${choice2} lose`)
    }else if(choice1 === "scissor" && choice2 === "paper"){
        console.log(`${choice1} wins, ${choice2} lose`)
    }else if(choice1 === "scissor" && choice2 === "rock"){
        console.log(`${choice1} wins, ${choice2} lose`)
    }

}
 compare(userChoice, computerChoice);


