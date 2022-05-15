// 01
const firstName = 'Anoying'
const lastName = 'kid'
const country = 'INDIA'
const city = 'Dem'
const age = 69
const isMarried = 'NEVER'
const year = 2022
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// 02
console.log(typeof '10' == 10)

// 03
console.log(parseInt(9.8) == 10)

// 04
// i
console.log(10>9)
console.log(1>0)
console.log(9>8)
//ii
console.log(10<9)
console.log(1<0)
console.log(9<8)

// ---------------------
console.log("-------------------")
// ---------------------

// 05
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) //false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false

// ---------------------
console.log("-------------------")
// ---------------------

// 06
console.log(4>3 && 10<12); //true
console.log(4>3 && 10>12); //false
console.log(4>3 || 10<12); //true
console.log(4>3 || 10>12); // true
console.log(!(4>3)); // false
console.log(!4<3); //true
console.log(!(false)); //true
console.log(!(4>3 && 10<12)); //false
console.log(!(4>3 && 10>12)); //true
console.log(!(4==='4')); //true
console.log("There is no 'on' in both the dragon and python");

// 07

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
// January 1, 1970 is starting of epoach time so
console.log(Math.floor(Date.now()/1000)); // converting milliseconds to seconds
