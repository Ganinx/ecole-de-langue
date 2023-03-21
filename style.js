var menu = document.getElementsByClassName("menu-burger") [0];

menu.addEventListener("click",function() {
    var menub = document.getElementsByClassName("menub") [0];
    menub.classList.toggle("ouvert");
})


var menu2 = document.getElementsByClassName("menu-home") [0];

menu2.addEventListener("click",function() {
    var menuh = document.getElementsByClassName("menuh") [0];
    menuh.classList.toggle("ouvert");
})



var menu3 = document.getElementsByClassName("menu-person") [0];

menu3.addEventListener("click",function() {
    var menup = document.getElementsByClassName("menup") [0];
    menup.classList.toggle("ouvert");
})

