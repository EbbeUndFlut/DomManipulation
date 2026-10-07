// mit elemetents by tag name bekomme nwir eine HTMLColection von allen Elementen mit diesem Tag
let unsereDivs = document.getElementsByTagName("div")
// mit elementsById wird das erste Element mit der Id gewählt
let wichtig = document.getElementById("wichtig")
// elementByClassName liefert uns alle Elemente mit dem entsprechenden Klassennamen
let posaunen = document.getElementsByClassName("posaune")



// query selektoren die eine NodeList liefern
// Selektoren wie im CSS angeben . für Klasse # für ID oder einfach TAG name
// liefer alle Elemente die mit diesem Selektor selektiert werde
let heads = document.querySelectorAll("h1")
// liefert das erste Element welches mit dem Selekto selektiert wird
let firstDiv = document.querySelector("div")

// änderung von Inhalt
firstDiv.textContent = "Ich bin das erste DIVVVV"  //reine Text
firstDiv.innerText = " Ich bin toll" // sichtbarer Text (beachtet css) 
// firstDiv.innerHTML ="<h1>Auto</h1>" // -> vermeiden da dies ein mögliche Angriffsvektor sein könnte



// klassen und stil
console.log(posaunen.length)

for(let i = 0; i<posaunen.length;i++){
    posaunen[i].style.backgroundColor = "gold"
}

console.log(wichtig.classList)
wichtig.classList.add("switch") // fügt hinzu
wichtig.classList.remove("switch") // entfernt
wichtig.classList.toggle("switch") // wenn das element die klasse "wichtig" in der eigenen Klassenliste hat, dann wird es entfernt, ansonsten hinzugefügt
wichtig.classList.toggle("switch") // 
wichtig.classList.contains("switch") // liefert einen boolean, wenn klasse vorhanden dann true. ansonsten false


//erstellen von elementen
let liste = document.getElementById("liste")
let li = document.createElement("li")
li.textContent = "Ein wichtiger Listeneintrag"
liste.append(li) // fügt das neue element ans ende an
li = document.createElement("li")
li.textContent = "Ich bin wichtiger"
liste.prepend(li) // fügt das neue element an den anfang
li.remove() //löscht das element


/**
 * Gegeben ist ein Array von Brettspielen
 * ["Die Siedler von Catan", "Twilight Imperium", "Nemesis", "Arkham Horror", "Fallout the Board game", "Dark Souls the Board"]
 * im HTML macht ihr eine liste ul oder ol aber die li elemente fügt iht per code zu
 */
const boardgames = ["Die Siedler von Catan","Monopoly", "Twilight Imperium", "Nemesis", "Arkham Horror", "Fallout the Board game", "Dark Souls the Boardgame"]

const boardgameListenElement = document.getElementById('boardgames') // jetzt haben wir das ul lement an der hand

for (const game of boardgames){
    let li = document.createElement("li")
    li.textContent = game
    boardgameListenElement.append(li)
}

const lis =document.querySelectorAll("li")
lis.forEach((elem) => {
    elem.addEventListener("click",()=>{
        elem.classList.toggle('done')
    })
})
