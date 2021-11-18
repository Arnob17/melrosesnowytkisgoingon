let lines = [
        "Waves of Water!",
        "Snixon is Vibing!",
        "Aliya is spying!",
        "Bijoy is glowing!",
        "Nubah is busy!",
        "Jim is watching naruto!",
        "Arnob is singing!",
        "Samir is flying!"
]
const text = document.getElementById("lines");
      document.getElementById("lines").innerHTML = `${lines[Math.floor(Math.random() * lines.length)]}`;
