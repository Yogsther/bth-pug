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

const menu = [
    {
        title: "Startsida",
        link: "#"
    },
    {
        title: "Aktuellt",
        link: "#"
    },
    {
        title: "Vi bildetapeuter",
        link: "#"
    },
    {
        title: "Resurser och länkar",
        link: "#"
    },{
        title: "Kontakt",
        link: "#"
    }
]

document.body.onresize = () => {
    update_burger();
}
document.body.onload = () => {
    update_burger();
}

var burger = document.getElementById("burger");
var burger_button = document.getElementById("burger-button");

function update_burger(){
        burger_button.remove();
        burger.remove();
        try{
            var links = document.getElementsByClassName("links");
            for(link of links){
                link.remove();
            }
        } catch(e){console.warn(e)}
    if(document.body.offsetWidth > 800){
        var header_wrap = document.getElementById("header-wrap")
        var links = document.createElement("span");
            links.classList.add("links");

        for(link of menu){
            links.innerHTML += "<a href='" + link.link + "' class='link-header'>" + link.title + "</a>";
        }

        header_wrap.appendChild(links);

    } else {
        document.getElementById("header-wrap").appendChild(burger_button)
        document.body.insertBefore(burger, document.body.firstChild);
    }
}
