function TvOpen() {
    document.getElementById("button").setAttribute("class", "open");
    document.getElementById("content").setAttribute("class", "TV-on");
    document.getElementById("channel").style.display = "block";
    document.getElementById("nosign").style.display = "block";
    setTimeout(function(){
		Enter();
	}, 1000);
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

function Enter() {
    document.getElementById("nosign").style.display = "none";
    document.getElementById("content").setAttribute("class", "TV-changing");
    document.getElementById("enter").style.display = "block";
}