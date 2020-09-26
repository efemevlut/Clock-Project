function hour(){

    let liveClock = "";
    let result = new Array(3);
    let current = new Date;
    
    result[0] = current.getHours();
    result[1] = current.getMinutes();
    result[2] = current.getSeconds();
    
    let hours = result[0];
    let minutes = result[1];
    let seconds = result[2];

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (hours < 12) {
        return liveClock = `${hours}:${minutes}:${seconds} AM`  
    }else {
        return liveClock = `${hours}:${minutes}:${seconds} PM`
    }
    
    
};
    


function showHour() {
    let test = document.querySelector("#test");
    test.innerHTML = hour();
};  


setInterval("showHour()", 1000);







