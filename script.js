Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


// trying to make something more efficient for enlarging images

let moviePosters = document.getElementsByClassName("image");

imagesArray = [];

imagesArray.push(moviePosters);


console.log(imagesArray);


// function new to enlarge image





/*

document.getElementById("enlarge").addEventListener("click", function() {
   enlargeImage();

})



document.getElementById("close").addEventListener("click", function() {
    resetImageSize();
})


// Function to enlarge Image 

function enlargeImage() {
    img = document.getElementById("enlarge");
    img.style.transform = "scale(2)";
    img.style.transition = "transform 0.25s ease";


    console.log("large");

    return;
}



// function to reset Image size

function resetImageSize() {
  
    img = document.getElementById("close");
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";

    console.log("reset");

}




*/




    










