var burger_open = false;
var timeout;

function toggle_burger(){
    clearTimeout(timeout);
    var burger = document.getElementById("burger");
        burger.style.transition = "right .35s ease";
    burger_open = !burger_open;

    if(burger_open) burger.style.right = "-20vw";
        else burger.style.right = "-100vw";
    
    timeout = setTimeout(() => {
        burger.style.transition = "none";
    }, 350);
}