I'm playing around here. Eventual goals:

## Nonogram ##
    - be able to display an array as a grid of little squares
    - be able to select a color
    - be able to switch the color in the array that matches the square clicked to the color that is selected
    - be able to change the size of the array
    - be able to get a pattern array from the server and display it (but not with the correct colors), and then switch it to the correct colors by clicking on the squares ( I think I'll do this by getting the master pattern from the server, and then making a new array full of gray squares in the same dimensions. Then I can make a function which compares the two arrays and when they match it can report that it is complete)
    - I need to display some sort of logic problem along the outside. First step is probably to make a function that creates the logic problem by counting how many in a row in the array are the same... 


## Cross Stitch ##

    -Display an array on the screen
    -The array should be made of colored boxes that toggle between color and symbol on click (so I imagine it's an array of objects? Each square has a color and a symbol and a toggle stitched and a toggle searched? I think the color should be the hex value, with a conversion table in the database to switch it to DMC numbers)
    1. create a small cross stitch pattern object in the component
    2. send it to the database
    3. get it from the database by its id
    4. display it on the page


    The other part, where I ask my AI to figure out the symbols:
    -read from left to right
    -recognize boxes
    -check if box is shaded
    -mark vertical and horizontal tens, perhaps by | and _ ?
    -check if the symbol is already in the symbol array
    -if so, push its alphanumeric to the pattern text
    -if not, give it an alphanumeric and push the object into the symbol array. 
    -probably end up with a text that looks something like: 3,3,3,3,|,4,4,g,4,_g,g,g,g,|,4,4,g,4,_
    -use that text to make an array of objects for the pattern section
    - could also probably use an object - {1-1:{color: "red", display: "symbol", symbol:"3"}}