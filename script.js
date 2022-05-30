Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


// Function created to enlarge movie image on click

document.getElementById("enlarge").addEventListener("click", function() {
    img = document.getElementById("enlarge");
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
})









