seconds = localStorage.getItem("secs");
minutes = localStorage.getItem("mins");

document.getElementById("num-seconds").innerHTML = seconds;
document.getElementById("num-minutes").innerHTML = minutes;

if(minutes % 10 == 1){
    document.getElementById("text-minutes").innerHTML = "минута";
}
else if(minutes % 10 >= 2 && minutes % 10 <= 4){
    document.getElementById("text-minutes").innerHTML = "минуты";
}
else{
    document.getElementById("text-minutes").innerHTML = "минут";
}

if(seconds % 10 == 1){
    document.getElementById("text-seconds").innerHTML = "секунда";
}
else if(seconds % 10 >= 2 && seconds % 10 <= 4){
    document.getElementById("text-seconds").innerHTML = "секунды";
}
else{
    document.getElementById("text-seconds").innerHTML = "секунд";
}

function logout(){
    window.close()
}