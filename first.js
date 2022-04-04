const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const clock = setInterval( function time() {
    let nowdate = new Date();
    let hr = nowdate.getHours();
    let min = nowdate.getMinutes();
    let sec = nowdate.getSeconds();

    hour.textContent = hr;
    second.textContent= sec;
    minute.textContent= min;
    
}, 1000);