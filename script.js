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

   
}


// function to reset Image size

function resetImageSize() {
  
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.25s ease";

}


// function to display text on clicked image




// Parallax Carousel







// Dark mode

let darkModeLight = document.querySelector(".mode");
darkModeLight.addEventListener("click", function (){
    document.body.classList.toggle("darkMode");
})




// Hover over Pokemons name (Credits to Shiva for this one)

const pokeMouseOver = () => {
    let pokeTags = document.querySelectorAll('.poke');
    console.log(pokeTags);
    pokeTags.forEach(el=>{
        el.addEventListener('mouseover', ()=>{
           let tooltip = el.querySelector('img');
            console.log(tooltip)
           tooltip.style.visibility = 'visible';
            tooltip.style. opacity = '1';
        })
    })
}
const pokeMouseOut = () => {
    let pokeTags = document.querySelectorAll('.poke');
    pokeTags.forEach(el=>{
        el.addEventListener('mouseout', ()=>{
            let tooltip = el.querySelector('img');
            console.log(tooltip)
            tooltip.style.visibility = 'hidden';
            tooltip.style. opacity = '0';
        })
    })
}

pokeMouseOver();
pokeMouseOut();








    





