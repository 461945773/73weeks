function TvOpen() {
    document.getElementById("button").setAttribute("class", "open");
    document.getElementById("content").setAttribute("class", "TV-on");
    document.getElementById("channel").style.display = "block";
    setTimeout(function() {
        Love();
    }, 100);
    setTimeout(function() {
        Enter();
    }, 8290);
}
//function TvClosed() {
//    document.getElementById("button").setAttribute("class", "close");
//    document.getElementById("content").setAttribute("class", "TV-closed");
//    document.getElementById("channel").style.display = "none";
//    document.getElementById("nosign").style.display = "none";
//}

function ButtonClick() {
    if (document.getElementById("button").className == "close") {
        TvOpen();
    } else {
        TvClosed();
    }
}

function Love() {
    document.getElementById("nosign").style.display = "none";
    document.getElementById("love").style.display = "block";
}

function Enter() {
    document.getElementById("love").style.display = "none";
    document.getElementById("nosign").style.display = "none";
    document.getElementById("content").setAttribute("class", "TV-changing");
    document.getElementById("enter").style.display = "block";
}