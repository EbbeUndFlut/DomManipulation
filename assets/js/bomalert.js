// Eingabeaufforderungen und NAchrichten
// ALERT
// alert("Pass auf, es besteht die Chance das du ein Ultra Cooler JavaScript Developer wirst")
// CONFIRM
//let wahl = confirm("Willst du JavaScript benutzen?")
// console.log(wahl)
// PROMPT
//let name = prompt("Sag mir deinen Superheldennamen")
//console.log(name)

// Baut ein Rate Spiel Zahlenraten, einfach nur mit dem Prompt

let target = Math.floor(Math.random()*10)+1
console.log(target)

//loop weil wir immer wieder raten wollen
//wir bekommen als antwort entweder , die eingegeben zahl ist zu groß,
// zu klein oder wir gewinnen. ausgabe einfach in der console
// wenn wir richtig geraten haben soll der loop unterbrochen werden

// wir brauchen verzweigungen

// einen string in eine number konvertieren
let number = Number("5")
console.log(number)

let win = false

do{
    let guess = prompt("Welche Zahl wählst du, junger Padawan?")
    if(guess == null)break
    if(guess < target){
        console.log("zu klein deine zahl sie ist")
    }
    else if(guess > target){
console.log("zu groß deine zahl sie ist")
    }
    else{
        win = true
    }
}while(!win)

    if(win)
        console.log("Auf der Gewinnerseite du bist")

