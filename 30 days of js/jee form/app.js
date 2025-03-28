var questions = [
  
    {
        "question": "HTML stands for_____",
        "A":"hyperText markup Language",
        "B":"HyperText machine language",
        "C":"HyperText Marking Language",
        "D":"HyperText Mailup Language",
        "answer":"A",
    },
    {
        "question":"Who is the father of html",
        "A":"Rasmus Lerdor",
        "B":"Tim Berners-lee",
        "C":"Bredan Eich",
        "D":"Sergey Brin",
        "answer":"B",
    },
    {
        "question":"what is the function of css",
        "A":"Main function",
        "B":"styling",
        "C":"cascading",
        "D":"indexing",
        "answer":"B",
    },
    {
      "question": "A flashing red traffic light signifies that a driver should do what?",
      "A": "stop",
      "B": "speed up",
      "C": "proceed with caution",
      "D": "honk the horn",
      "answer": "A"
    }, {
      "question": "A knish is traditionally stuffed with what filling?",
      "A": "potato",
      "B": "creamed corn",
      "C": "lemon custard",
      "D": "raspberry jelly",
      "answer": "A"
    }, {
      "question": "A pita is a type of what?",
      "A": "fresh fruit",
      "B": "flat bread",
      "C": "French tart",
      "D": "friend bean dip",
      "answer": "B"
    }, {
      "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
      "A": "landscape",
      "B": "caricature",
      "C": "still life",
      "D": "Impressionism",
      "answer": "B"
    }, {
      "question": "A second-year college student is usually called a what?",
      "A": "sophomore",
      "B": "senior",
      "C": "freshman ",
      "D": "junior ",
      "answer": "A"
    }, {
      "question": "A student who earns a J.D. can begin his or her career as a what?",
      "A": "lawyer",
      "B": "bricklayer",
      "C": "doctor",
      "D": "accountant",
      "answer": "A"
    }, {
      "question": "A triptych is a work of art that is painted on how many panels?",
      "A": "two",
      "B": "three",
      "C": "five",
      "D": "eight",
      "answer": "B"
    }, {
      "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
      "A": "oneself",
      "B": "other people",
      "C": "little made large",
      "D": "hued in green and blue",
      "answer": "B"
    }, {
      "question": "According to a popular slogan, what state should people not 'mess with'?",
      "A": "New York",
      "B": "Texas",
      "C": "Montana",
      "D": "Rhode Island",
      "answer": "B"
    }, {
      "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
      "A": "tuna",
      "B": "laundry",
      "C": "popcorn",
      "D": "coffee",
      "answer": "D"
    }, {
      "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
      "A": "chicken",
      "B": "rabbit",
      "C": "moose",
      "D": "snake",
      "answer": "B"
    }, {
      "question": "According to Greek mythology, who was Apollo's twin sister?",
      "A": "Aphrodite",
      "B": "Artemis",
      "C": "Venus",
      "D": "Athena",
      "answer": "B"
    }, {
      "question": "According to legend, if you give someone the 'evil eye' what are you doing?",
      "A": "cursing them",
      "B": "blessing a child",
      "C": "counting money",
      "D": "passing time",
      "answer": "A"
    
    }
];

let currentIdx = 0;
var preIdx =-1;
var id=null;


var userAns={}
function QuesNum() {
    let html = `<div class="row num-list">`
    for (let index = 0; index < questions.length; index++) {
      html += ` <div class="col-sm-3" onclick=getIndex(${index})>
                  <div class="circle" id="question-index${index}">${index + 1}
                  </div>
                  </div>
                `;
      if ((index + 1) % 4 === 0) {
        html += `</div>
        <div class="row num-list">`;
      }
    }
    document.getElementById("num-list-id").innerHTML=html;
  }
  function submitTest(t){
    if(t.innerHTML==="Start"){
      QuesNum();
      showQuiz(0);
      setTimer();
      t.innerHTML="Submit";
    }
    else{
      clearInterval(id)
      var notans=0;
      var rightans=0;
      var wrongans=0;
       for (let index = 0; index < questions.length; index++) {
      if(userAns[index]!==undefined){
        if (userAns[index]["user-ans"]===questions[index].answer) {
          rightans++;
        }
        else
         wrongans++;
      }else
      notans++;
        
      }
      let html=`<div>
  <h1>Right Answer=${rightans}</h1>
  <h1>Wrong Answer=${wrongans}</h1>
  <h1>Not Answer=${notans}</h1>
</div>`
document.querySelector("#container").innerHTML=html;
    }
  }
  function getIndex(index){
    preIdx=currentIdx;
    currentIdx=(index);
    showQuiz(index)
    currentQuestion();
  }

    //  QuesNum();
  
  function showQuiz(index) {
    let ans= "";
    // console.log(userAns[index]);
    
    if(userAns[index] !== undefined){
      ans = userAns[index]["user-ans"];
      console.log(ans);
      
    }
              let quesHtml=  `
              
              <h4>${questions[index].question}</h4>

                      <div>
                          <input type="radio"${ans =="A"?"checked":""} onclick="userClick(${index},'A')"id="opt-0" name="opt">
                          <label for="opt-0">${questions[index].A}</label>
                      </div>
                    <div>
                          <input type="radio"${ans =="B"?"checked":""} onclick="userClick(${index},'B')" id="opt-1" name="opt">
                          <label for="opt-1">${questions[index].B}</label>
                      </div>
                    <div>
                          <input type="radio"${ans =="C"?"checked":""} onclick="userClick(${index},'C')"id="opt-2" name="opt">
                          <label for="opt-2">${questions[index].C}</label>
                      </div>
                    <div>
                          <input type="radio"${ans =="D"?"checked":""} onclick="userClick(${index},'D')" id="opt-3" name="opt">
                          <label for="opt-3">${questions[index].D}</label>
                      </div>
                      
                    <button class="btn btn-outline-primary" ${index===0?"disabled":""} onclick="previousQuiz(${index})">previous</button>
                    <button class="btn btn-outline-primary" ${index==questions.length-1?"+":""} onclick="nextQuiz(${index})">next</button>
               </div>
               </div>`
              document.querySelector("#ques-list-id").innerHTML=quesHtml;
  }
   function userClick(userIndex , option){
    document.querySelector("#question-index"+userIndex).style.backgroundColor="green";
    if(questions[userIndex].answer===option){
      userAns[userIndex]={"user-ans":option,answer:questions[userIndex].answer,isTrue:true,

      };
    }else{
      userAns[userIndex]={index:userIndex,"user-ans":option,isTrue:false,

      };
    }
    // console.log(userAns);

    function currentQuestion(){
      if(userAns[preIdx]===undefined){
        document.querySelector("#question-index"+preIdx).style.backgroundColor="goldenrod";
      }
      else{
        document.querySelector("#question-index"+preIdx).style.backgroundColor="green";
      }
      document.querySelector("#question-index"+currentIdxs).style.backgroundColor="red";
    }
  }
  function previousQuiz(index){
    preIdx=currentIdx;
    currentIdx=(index-1);
  showQuiz(index-1);
  currentQuestion();
  }
  function nextQuiz(index) {
    preIdx=currentIdx;
    currentIdx=(index+1);
    showQuiz(index+1);
    currentQuestion();
  }
  
   var examtime=1;
  var min =0;
  var sec=0;
  function setTimer(){
    id=setInterval(()=>{
      sec++;
      if(sec==60){
        min++;
        sec=0;
      }
      if(min===examtime){
        clearInterval(id);
      }
      document.querySelector("#timer").innerHTML=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)
    },1000);
  }
