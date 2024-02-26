// const randomNum = Number(prompt('Inserisci un numero qualsiasi'));
// console.log(randomNum);

// for (let i = 0; i < randomNum; i++) {
//     const num = randomNum ;
//     console.log(num);   
    
// };

let somma = 0;
let num = 0;


while (num < 10) {
    let randomNum = Number(prompt('Inserisci un numero qualsiasi'));
    console.log(randomNum);
    somma = somma + randomNum;

    num++;
    
}

alert (`La somma dei numeri è ${somma}`)

// funziona!!

