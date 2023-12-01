// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ
//  მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let arrayText = ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10",];

for (let count = 0; count < arrayText.length; count = count +2) {
    console.log(arrayText[count])
}
// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს.
// მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let nombers = 11;

let nombersNull = 1;

while(nombers > nombersNull) {
    nombers = nombers - 1
    console.log(nombers)
}
// მოცემული მასივიდან 
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე.
//  შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების 
//  მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.


let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

for (let name = 0; name < names.length; name++) {
    // console.log(names[name]);
    if (names[2] === 'Bob') {
        names[2] = names.splice;
        names[4] = names.splice;
        names[7] = names.splice;
        names[8] = names.splice;
    }
}
console.log(names)
// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული
// რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ.
// თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

let numberPower =  "number, power";


// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები
// იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე
// იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო
// თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// მაგ.
// 1
//  2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz
// 11
// 12 Fizz
// 13
// 14
// 15 FizzBuzz
// … 100-მდე.


let ahundred = 100;


for (let nomber = 1; nomber < ahundred + 1; nomber++) {
    console.log(nomber)
    function calculator(num1, equal) {
        if (nomber / 3) {
            nomber / num1
            console.log()
        }
    }
}

calculator(3, 'add')

// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის 
//კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს:
//Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

let js = "javascript";

console.log(js.replace("javascript", "Javascript"));

// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს
// მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს
// “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
let testString = 0;
let text = "Hello, World";
let arrayJsText = [];

for (; testString < text.length; ) {
    arrayJsText += text[testString];
    testString++
}

console.log(arrayJsText);