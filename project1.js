let day
let time 
let date
let sec
const options = {weekday: 'long' , year: 'numeric' , month: 'long' , day: 'numeric'};
function addzero(){

if (sec < 10){
    time = day.getHours() + ":" + day.getMinutes() + ":" + `0${sec}`;

}
else{
    time = day.getHours() + ":" + day.getMinutes() + ":" + sec;
}
}
setInterval(() => {
    day = new Date()
    sec = day.getSeconds()
    addzero()
    date = day.toLocaleString(undefined , options)
    document.getElementById('time').innerHTML = time  + "<br>on " + date;

}, 1000);