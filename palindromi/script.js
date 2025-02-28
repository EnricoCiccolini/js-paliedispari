//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma




let wordRequest = prompt('inserisci la parola da controllare')
let check = isPalindrome(wordRequest)
console.log(check)

if (check) {
    console.log(' la parola è palindroma')
}
else  {
   console.log (' la parola non è palindroma')
}



// funzione 


function isPalindrome(word) {
    let word1
    let word2 = ('')
    let palindrome

    word1 = word.split('')
    console.log(word1)
    for (let i = word1.length - 1; i >= 0; i--) {

        word2 += word1[i]
    }
    console.log(word2)

    palindrome = word2 === word

    console.log(palindrome)
    return palindrome = word2 === word
}

