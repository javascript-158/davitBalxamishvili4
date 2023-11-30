
let arrayText = ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10",];



// for (let count of arrayText ) {
//     console.log(count);
// }

for (let count = 0; count < arrayText.length; count = count +2) {
    console.log(arrayText[count])
}


let nombers = 11;

let nombersNull = 1;

while(nombers > nombersNull ) {
    nombers = nombers - 1
    console.log(nombers)
}

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

for (let name = 0; name < names.length; name++) {
    console.log(names[name],);
    if (names[2] === 'Bob') {
        names[2] = undefined;
        names[4] = undefined;
        names[7] = undefined;
        names[8] = undefined;
    }
}


// let ahundred = 100;


// for (let nomber = 1; nomber < ahundred + 1; nomber++) {
//     console.log(nomber)
//     if (nomber / 3) {
//         console.log(nomber + "Fizz")
//     }
// }

