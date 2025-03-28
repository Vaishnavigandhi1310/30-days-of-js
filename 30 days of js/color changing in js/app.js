var table = document.getElementsByClassName('table')
var color ="";
 
for(i=0;i<table.length;i++){
    table[i].addEventListener("mouseenter",function(){
        color=this.style.backgroundColor
        this.style.backgroundColor="#000000"
    
    })

    table[i].addEventListener("mouseout",function(){
    this.style.backgroundColor=color
})
}
