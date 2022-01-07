function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onStart() {
    document.getElementById("thesispage").style.display = "none";
    document.getElementById("firstpointpage").style.display = "none";
    document.getElementById("secondpointpage").style.display = "none";
    document.getElementById("thirdpointpage").style.display = "none";

    var loadingscreen = document.getElementById("loading");
    loadingscreen.style.display = "none";
}

var page = document.getElementById('homepage');

function pageclicked(pageid) {
    var buttonspage = document.getElementById("homepage");
    buttonspage.style.display = "none";
    page = document.getElementById(pageid);
    page.style.display = "block";
}

function backpageclicked() {
    page.style.display = "none";
    document.getElementById("homepage").style.display = "block";
}
