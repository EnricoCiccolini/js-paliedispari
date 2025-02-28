//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.



let pcRandomNumber1to5
let userChoice
let userNumber
let somma
userChoice = prompt('scegli pari o dispari ')
userNumber = prompt(' scegli un numero da 1 a 5')
userNumber = parseInt(userNumber)
pcRandomNumber1to5 = Math.floor(Math.random() * 5) + 1
somma = userNumber + pcRandomNumber1to5
console.log(userNumber)
console.log(pcRandomNumber1to5)
console.log(somma)



function numberIsOdd(numberToCecked) {

    return numberToCecked % 2 !== 0
}

let checked = numberIsOdd(somma)

if (userNumber <= 0 || userNumber > 5 || isNaN(userNumber))
    { console.log('inserisci un numero valido') }
else {
    if (checked) {
        if (userChoice === ('dispari')) {
            console.log(' complimenti hai vinto ')
        } else {
            console.log(' mi spiace hai perso ')
        }
    }

    if (!checked) {
        if (userChoice === ('pari')) {
            console.log(' complimenti hai vinto ')
        } else {
            console.log(' mi spiace hai perso ')
        }
    }

}



