let max= parseInt(prompt("enter a number"));
while(!max){
    max=parseInt(prompt("please enter a valid number"));
}
const target= Math.floor(Math.random() * max ) + 1  ;
console.log(target);

let guess=prompt("enter guess value");
let attempts=1;
while(guess!==target){
    if(guess==='q'){
        console.log("quitting the game");
        break;
    } 
    attempts++;
    
     if(parseInt(guess) > target){
          guess=parseInt(prompt("Too high! Enter a new guess"));
     }
     else{
       guess= parseInt(prompt("Too low! enter a new guess")); 
     }
}

alert(`YOU GOT IT TOOK U ${attempts} guesses`);