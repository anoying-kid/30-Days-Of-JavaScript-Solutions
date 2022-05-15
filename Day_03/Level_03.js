// 01 date time with 0
const now = new Date();
let hour = now.getHours()<10 ? String(`0${now.getHours()}`) : now.getHours();
let min = now.getMinutes()<10 ? String(`0${now.getMinutes()}`) : now.getMinutes();
console.log(now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+" "+hour+":"+min);