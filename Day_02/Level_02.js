// 01
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// 02
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// 03
let num = '10'
console.log(typeof num == typeof 10)
console.log(typeof parseInt(num) == typeof 10)

// 04
let numb = '9.8'
console.log(typeof parseFloat(numb) == typeof 10)

// 05
let word1 = 'python'
let word2 = 'jargon'
console.log(word1.includes('on'), word2.includes('on'))

// 06
let sentence1 = 'I hope this course is not full of jargon.'
console.log(sentence1.includes('jargon'))

// 07
// (min, max) => (0,100)
// min and max both inclusive => Math.round((Math.random())*(max-min+1))+min
// only max inclusive => Math.floor((Math.random())*(max-min+1))+min
// only min inclusive => Math.ceil((Math.random())*(max-min+1))+min
let number1 = Math.round((Math.random())*(100-0+1))+0
console.log(number1)

// 08
let number2 = Math.round((Math.random())*(100-50+1))+50
console.log(number2)

// 09
let number3 = Math.round((Math.random())*(255-0+1))+0
console.log(number3)

// 10
let text = 'JavaScript'
let randomNumber = Math.round(Math.random()*(text.length))
console.log(text[randomNumber])

// 11
// using escape character
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
// shortcut
console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`)

// 12
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let start = sentence2.indexOf('because')
let end = sentence2.indexOf('is') - 1
console.log(sentence2.substring(start, end))