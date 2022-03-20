// 01
const challenge = '30 Days Of JavaScript '

// 02
console.log(challenge)

// 03
console.log(challenge.length)

// 04
console.log(challenge.toUpperCase())

// 05
console.log(challenge.toLowerCase())

// 06
// using substr()
console.log(challenge.substr(0,1))
//using substring()
console.log(challenge.substring(0,1))

// 07
console.log(challenge.slice(3))

// 08
console.log(challenge.includes('Script'))

// 09
console.log(challenge.split())

// 10
console.log(challenge.split(' '))

// 11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))

// 12
console.log(challenge.replace('JavaScript', 'Python'))

// 13
console.log(challenge.charAt(15))

// 14
console.log(challenge.charCodeAt(11))

// 15
console.log(challenge.indexOf('a'))

// 16
console.log(challenge.lastIndexOf('a'))

// 17
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))

// 18
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))

// 19
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))

// 20
console.log('  30 Days of the JavaScript'.trim())

// 21
console.log(challenge.startsWith(30))

// 22
console.log(challenge.endsWith('Script'))

// 23
console.log(challenge.match('a'))

// 24
const str1 = '30 Days of'
const str2 = 'JavaScript '
let string = str1.concat(str2)
console.log(string)

// 25
console.log(challenge.repeat(2))