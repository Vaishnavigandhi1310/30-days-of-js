btn=document.getElementById('btn');
 btn.addEventListener("click",add)

 btn2=document.getElementById('btn2')
 btn2.addEventListener("click",subtract)

 btn3=document.getElementById('btn3')
 btn3.addEventListener("click",multiply)

 btn4=document.getElementById('btn4')
btn4.addEventListener("click",divide)

 
function add(){
input1 = document.getElementById('input1')
input2 =document.getElementById('input2') 
num1 = (Number)(input1.value)
num2=   (Number)(input2.value)
str = "output :  "
// console.log(num1+num2);
str+= (num1+num2) 
document.getElementById('div').innerHTML=str 
} 

function subtract(){
    input1 = document.getElementById('input1')
    input2 = document.getElementById('input2')
    num1=(Number)(input1.value)
    num2=(Number)(input2.value)
    str="output : "
    str+=(num1-num2)
    document.getElementById('div').innerHTML=str
}

function multiply(){
    input1=document.getElementById('input1')
    input2=document.getElementById('input2')
    num1=(Number)(input1.value)
    num2=(Number)(input2.value)
    str="output : "
    str+=(num1*num2)
    document.getElementById('div').innerHTML=str
}
 
function divide(){
    input1=document.getElementById('input1')
    input2=document.getElementById('input2')
    num1=(Number)(input1.value)
    num2=(Number)(input2.value)
    str="output : "
    str+=(num1/num2)
    document.getElementById('div').innerHTML=str
}