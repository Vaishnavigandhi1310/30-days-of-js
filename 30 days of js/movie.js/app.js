let fav = "pk";
let guess = prompt("enter your movie");
while((guess!=fav)&&(guess!="quit")){
    console.log("wrong guess");
guess=prompt("please try again");
}
if(guess==fav){
    console.log("congrats !");
}
else{
    console.log("you quit");
}