const max = prompt("enter the max no");
console.log(max);

const random = Math.floor(Math.random()* max )+1;

let guess = prompt("guess the number");

while(true){
    if(guess=="quit"){   
        console.log("user quit");
        break;
        
    }
    if(guess==random){
        console.log("congrats  random nu was");
        break;
        
    }
    else if(guess< random){       
        guess=prompt("guess was small try again");
    }
    else{
        guess=prompt("number was to large");  
    }



//     else{
//         guess = prompt("try again you are wrong ");
//     }
 }
