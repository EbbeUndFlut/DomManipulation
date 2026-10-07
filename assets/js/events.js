/**
 * EVENTS
 */
// Ein Event ist ein Signal des Browsers: En kLick, ein tastendruck, ein abgeschicktes Formular, ein fertig geladenes Dokument
// Mit einen Listener sagen wir dem Browser welche Funktion bei diesem Signal ausgeführt werden soll

const btn = document.querySelector("button")
const btn2 = document.querySelector("#btn2")
const meinDiv = document.querySelector('div')

function derKlick(event){
    console.log(event)
}

btn.addEventListener("click", derKlick)

btn2.addEventListener("dblclick", (event)=>{
    console.log("2. Button geklickt")
})

// Maus: click, dblclick, mouesover, mouseout
// Tastatur: keydown, keyup
// Formular: input, change, submit, focus
// Fenster/Seiten: DOMContentLoaded, load,resize,scroll

btn2.addEventListener("mouseover", (event) =>{
    btn2.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
})

function randomColor(){
    return Math.floor(Math.random()*256)
}


meinDiv.addEventListener("click", ()=>{
    meinDiv.style.backgroundColor="tomato"
})

/**
 * Jetzt denken wir nochmal alle an unsere Brettspielsammlung zurück. Ich möchte das wenn ich ein Spiel anklicke
 * der Hintergrund von diesem Spiel grün, weil ich dann gespielt habe 
 */