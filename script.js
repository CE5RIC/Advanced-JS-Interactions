Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}



// trying to make something more efficient for enlarging images by getting elements by class name

document.querySelectorAll(".image")[0].addEventListener("click" ,enlargeImage);



// Function to enlarge Image 

function enlargeImage() {
    let img = document.querySelectorAll(".image")[0];
    img.style.transform = "scale(2)";
    img.style.transition = "transform 0.25s ease";

    console.log("large");
}



// Parallax Caroussel








/*

// Collage

document.getElementById("enlarge").addEventListener("click", function() {
   enlargeImage();

})



document.getElementById("close").addEventListener("click", function() {
    resetImageSize();
})






// function to reset Image size

function resetImageSize() {
  
    img = document.getElementById("close");
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";

    console.log("reset");

}




*/









    





