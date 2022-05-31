A Becode Exercise

Title: Advanced-JS-Interactions

Repository: Advanced-JS-Interactions
Type of Challenge: Learning Challenge
Duration: 2 days
Deployment strategy :
Github page
Team challenge : solo
The Mission
Go check out the HTML file! Everything you need to know is there!

Must-have features

A parallax carousel
A collage with popup for more details
Hover image above every Pokemon in the text
Functional chaser or runner circle

Nice-to-have features

Chaser AND runner circle are functional
Lightmode / Darkmode switch
Final letter challenge completed!

My take on it

Going to give this project a film makeover. As big cinephile myself it seems fun to use the collage presented to us as a movie catalogue of some sort with some posters of my favourite ones.

Going to start with the collage first before attempting to create the parallax caroussel.

Enlarging the image (poster) when clicking on it works but I spent more then half of a day to get it back to its original size afterwards.
Still no solution but will keep on struggling until I get it.

I wanted to be able to close the enlarged photo by clicking on it but chose for a mouseout event for now to make it work. It wasn't the goal but it will do for now. Will have to go deeper into it on a later time to figure out how to that. Lots of work still do be done on this project.

Now I have to figure out a way to make the enlargement work for all images without hard coding everything. Should look into loops for that I guess.

I've created an object to store all images with document.queryselectorAll and then used a for loop through this object.
I amended my EnlargeImage and ResetImageSize function by using the "this" keyword instead of variables to refer to the object created.

Next step for the collage is to add a short description with the image when clicked.

Concerning the image shown when hovering over a Pokémon I would like to give credit to my colleague Shiva because she helped me with this. Along with some help of our friends at W3 schools for the css part.
