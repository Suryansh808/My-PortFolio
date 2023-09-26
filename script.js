let faBar = document.querySelector(".fa-bars");
let menu = document.querySelector(".menu");
let closed = 0
faBar.addEventListener("click", function(){
   if(closed == 0){
    menu.style.display="block";
    menu.style.display="flex";
    menu.style.flexDirection="column"; 
     closed = 1
   }else{
    menu.style.display="none"
    closed = 0
   }
})

// let  main = document.querySelector(".main-page")
// let crsr = document.querySelector(".cursor")

// main.addEventListener("mousemove", function(event){
//     crsr.style.top=event.pageY+"px"
//     crsr.style.left=event.pageX+"px"
// })

