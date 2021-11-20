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
        "snixon is epic",
]
const text = document.getElementById("lines");
      setInterval(async() => {
        document.getElementById("lines").innerHTML = `${lines[Math.floor(Math.random() * lines.length)]}`
      }, 3000)
