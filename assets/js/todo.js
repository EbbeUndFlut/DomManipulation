const form = document.querySelector('form')
const liste = document.getElementById('dieliste')

form.addEventListener('submit', (event) => {
    event.preventDefault() // verhindert das default verhalten des form tags ( neuladen der seite)
    const newTodo = event.target.aufgabe.value
    const newLi = document.createElement('li')
    newLi.textContent = newTodo
    liste.append(newLi)
    event.target.reset() // event.target gibt uns Zugriff auf das html form. reset könne wir als funktion nutzen umd das formular zurückzusetzen
})

liste.addEventListener('click',(event) =>{
    event.target.classList.toggle('done')
    console.log(event.target)
    console.log(event.currentTarget)
})