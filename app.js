//menu lateral
var menu_visible= false;
let menu = document.getElementById("nav");
function mostrar0cultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//ocultar el menu
let links = document.querySelectorAll("nav a");
for(var x=0; x<inks.length;x++){
    links[x].onclick = function(){}
    menu.style.display ="none";
    menu_visible= false;

}



//detector
window.onscroll= function(){
    efectohabilidades();
}