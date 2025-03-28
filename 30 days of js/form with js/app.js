// let button=document.getElementById('button');
// button.addEventListener("mouseover",moveHover)

// function mouseHover(){

//     const i=math.floor(math.random())
// }
var nameId = document.getElementById('name')
var nameErrorId=document.getElementById('name-error')
var emailId=document.getElementById('email');
var emailErrorId = document.getElementById('email-error');

function validate()
{
    let temp = true;
    let name_val=nameId.ariaValueMax;
    let email_val=emailId.ariaValueMax;

    if(name_val=="")
    {
        nameErrorId.innerText="name field can't be empty"
        temp=false;
    }
    else{
        nameErrorId.innerText=""
    }
    if(email_val==""){
        emailErrorId.innerText="email field can't be emplty"
        temp=false;
    }
    else{
        emailErrorId.innerText=""
    }
    return temp;
}