var burger_open = false;
var timeout;

function toggle_burger() {
    clearTimeout(timeout);
    var burger = document.getElementById("burger");
    burger.style.transition = "right .35s ease";
    burger_open = !burger_open;

    
    var width = document.body.offsetWidth;
    var offset = width / 1.4;
    if(offset > 400) offset = 400;

    if (burger_open) burger.style.right = -width+offset+"px";
    else burger.style.right = "-100vw";

    console.log(-width)

    timeout = setTimeout(() => {
        burger.style.transition = "none";
    }, 350);
}

document.body.addEventListener("click", e => {
    var burger_detected = false;
    for (el of e.path)
        if (el.id == "burger" || el.id == "burger-button") burger_detected = true;
    if (!burger_detected && burger_open) toggle_burger();
})