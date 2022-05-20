/*If you seeing this file then write your sentence in the lines[] array!*/
let lines = [
        "Waves of Water!",
        "Snixon is Vibing!",
        "Aliya is spying!",
        "Bijoy is glowing!",
        "Nubah is busy!",
        "Jim is watching naruto!",
        "Arnob is singing!",
        "Samir is flying",
        "Moon is Glowing",
        "Agent is being  E S P R E S S O",
        "snixon is epic",
        "nubah is eating cupcake",
        "jim is eating breakfast",
        "Epic-GG army is going on"
]
const text = document.getElementById("lines");
      setInterval(async() => {
        document.getElementById("lines").innerHTML = `${lines[Math.floor(Math.random() * lines.length)]}`
      }, 3000)

let x;
let y;