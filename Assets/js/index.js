function currentTime() {
    const date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var  month = date.getMonth();


    h = (h < 10 )? "0" + h:h;
    m = (m < 10 )? "0" + m:m;

    if (month + 1 == 3) {
        month = "Mar";
    }
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("month").innerHTML = month ;
}
setInterval(currentTime, 500);