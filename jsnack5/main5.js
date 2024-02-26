console.log("it works");

let oddNum = [];



// for (let i = 0; i < 6; i++) {
//     const request = Number(prompt("Inserisci un numero"));
//     console.log(request);

//     if (request % 2 !== 0) {
//         oddNum.push(request)
//     }

// }

// console.log(oddNum);


i = 0;

while (i < 6) {
    const request = Number(prompt('Inserisci un numero'));

    if (request % 2 !== 0){
        oddNum.push(request)
    }



    i++
}

console.log(oddNum);

// funziona!!!
