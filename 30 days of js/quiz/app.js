let examTime=1;
var questions = [
    {
        "question": "HTML stands for_____",
        "a":"hyperText markup Language",
        "b":"HyperText machine language",
        "c":"HyperText Marking Language",
        "d":"HyperText Mailup Language",
        "answer":"a",
    },
    {
        "question":"Who is the father of html",
        "a":"Rasmus Lerdor",
        "b":"Tim Berners-lee",
        "c":"Bredan Eich",
        "d":"Sergey Brin",
        "answer":"b",
    },
    {
        "question":"what is the function of css",
        "a":"Main function",
        "b":"styling",
        "c":"cascading",
        "d":"indexing",
        "answer":"b",
    }
];

var userAns=[];
function showQues(){
var html=questions.map((question,index)=>{
    userAns.push({userSelection:"",answer:question.answer})
    return `<div class = "questions">
    <h3>${index+1}.${question.question}</h3>
    <h6><input type="radio" onclick="userClick(${index},'a')" name="questions${index+1}">a) id="${question.a}"
    label for="{question.a}"</h6>
    
    <h6><input type="radio" onclick="userClick(${index},'b')" name="questions${index+1}">b) ${question.b}</h6>
    <h6><input type="radio" onclick="userClick(${index},'c')" name="questions${index+1}">c) ${question.c}</h6>
    <h6><input type="radio" onclick="userClick(${index},'d')" name="questions${index+1}">d) ${question.d}</h6>

</div>
<hr/>`;
});
document.querySelector("#questions-list").innerHTML = html;
startTimer();
}

function userClick(questionIndex,option){
    userAns[questionIndex]['userSelection']=option;
}
function submitQuiz(id){
    if(id.innerHTML=='start'){
        showQues();
        id.innerHTML='Submit'
    }
    else{
        let rightAns=0;
        let wrongAns=0;
        let notAns=0;
        userAns.forEach((ans,index)=>{
            if(ans["userSelection"]===""){
                notAns++;
            }
            else if(ans["userSelection"]===ans["answer"]){
                rightAns++;
            }
            else
            wrongAns++;
        })
        html =`<div class="container">
        <div class="row"><h3>Right Answer :- ${rightAns}</h3></div>
        <div class="row"><h3>Wrong Answer :- ${wrongAns}</h3></div>
        <div class="row"><h3>Not Answer :- ${notAns}</h3></div>
       </div> `
       document.querySelector("#container").innerHTML=html;
    }
}
var minutes=0;
var seconds=0;

function startTimer(){
    setInterval(()=>{
        seconds++;
        if(seconds===60){
            minutes++
            seconds=0;
        }
        if(minutes===examTime){
            submitQuiz("start");
        }
        document.querySelector("#timer").innerHTML = (minutes<10?"0"+minutes:minutes)+":"+(seconds<10 ? "0" + seconds : seconds)

        
    },1000);
}
