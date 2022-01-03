var dateToday = new Date();
let addZeroes = (num) => {
    return num < 10 ? `0${num}`: num;
}

let hr = addZeroes(dateToday.getHours());
let min = addZeroes(dateToday.getMinutes());
let sec = addZeroes(dateToday.getSeconds());

//console.log(hr, min, sec); 

document.getElementById("time").textContent = `${hr}:${min}:${sec}`