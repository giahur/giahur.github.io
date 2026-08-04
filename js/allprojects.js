window.onload = init;

function init(){
    var btn = document.getElementById("moreBtn");

    btn.addEventListener("click", loadMore);
}

function loadMore() {
    var more = document.getElementById("more");
    var btn = document.getElementById("moreBtn");

    if (btn.innerHTML == "See less") {
        btn.innerHTML = "See more";
        more.style.display = "none";
    } else {
        btn.innerHTML = "See less";
        more.style.display = "inline";
    }
}