// we've to use conditionals (if else) Day_04 and loop (Day_05) for these question.
// 01
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let word = 'love'

// Method_01 : this will also count 'beloved' too

let count = 0
for(let i=0; i<sentence1.length-word.length; i++)
    if (sentence1.slice(i,i+4)==word)
        count++
    // console.log(sentence.slice(i,i+4))
console.log(count)

// Method 2: wont count word like 'beloved'
count = 0
let senArray = sentence1.split(' ')
for(element of senArray)
    if (element.includes(word)) count++;
console.log(count)

// 02
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.match(/because/))
// we can use above method : try it yourself

// 03
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')))

const badWords = '!@#$%^&*():;?<>_+'
let sent = []
for (word of sentence)
    if (!badWords.includes(word)) sent.push(word)
    // console.log(word)
sent = sent.join('')
console.log(sent)

// 04
// you've to learn little about regex for solving this you can skip this question till then
let text2 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaries = text2.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome
)