let computerID = document.querySelector("#computer-turn");
let yourturnID = document.querySelectorAll(".your-turn");
let h1 = document.querySelector("#name")
let images = ["rock.png","paper.png","scissor.png"];
let id;

yourturnID.forEach((turn)=>{
    turn.addEventListener("click", function (){
        let value = Number(turn.getAttribute("value"));
        console.log(value);
        let j=1;
        id = setInterval(()=>{
            let i = Math.floor(Math.random()*3);
            // computerID.setAttribute("src",images[i]);
            // computerID.setAttribute('src',images[i])'
            computerID.setAttribute("src",images[i]);

            j++;
            if(j===20){
                clearInterval(id);
                if(value === 0 && i === 2){
                    h1.innerText = "you won"                }
                else if(value === 1 && i === 0){
                    h1.innerText = "you won"    
                }
                else if(value===2 && i === 1){
                    h1.innerText= ("you won");
                    
                }
                else if(value === i){
                    h1.innerText = ("game tie");
                    
                }
                else {
                    h1.innerText = ("you lose");
                    
                }
            }
        },50);
        
    });
});
