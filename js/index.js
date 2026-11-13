window.onload = init;

function init(){
    var moreBtn = document.getElementById("moreBtn");
    moreBtn.addEventListener("click", loadMore);

    var resumeBtn = document.getElementById("resumeBtn");
    resumeBtn.addEventListener("click", showResume);
}

function loadMore() {
    var more = document.getElementById("more");
    var moreBtn = document.getElementById("moreBtn");

    if (moreBtn.innerHTML == "See less") {
        moreBtn.innerHTML = "See more";
        more.style.display = "none";
    } else {
        moreBtn.innerHTML = "See less";
        more.style.display = "inline";
    }
}

function showResume() {
    var show = document.getElementById("show");
    var resumeBtn = document.getElementById("resumeBtn");

    if (resumeBtn.innerHTML == "Hide Resume") {
        resumeBtn.innerHTML = "Show Resume";
        show.style.display = "none";
    } else {
        resumeBtn.innerHTML = "Hide Resume";
        show.style.display = "inline";
    }
}