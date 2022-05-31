Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}



// For loop created for the query image array


const moviePosters = document.querySelectorAll(".image");

for (let i = 0; i < moviePosters.length; i++) {
    moviePosters[i].addEventListener("click", enlargeImage);
    moviePosters[i].addEventListener("mouseout", resetImageSize);
}


// Function to enlarge Image 

function enlargeImage() {

    this.style.transform = "scale(2)";
    this.style.transition = "transform 0.25s ease";

    console.log("large");
}



// function to reset Image size

function resetImageSize() {
  
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.25s ease";

    console.log("reset");

}



// Parallax Carousel

















    





