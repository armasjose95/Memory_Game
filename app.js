const cardArray = [   // assign the array to the value cardArray
    {
        name: 'fries',        //objects   12 cards with 2 matching.
        img:'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png'
    },
    {
        name: 'pizza',
        img:'images/pizza.png'
    },
    {
        name: 'fries',        //objects
        img:'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png'
    },
    {
        name: 'pizza',
        img:'images/pizza.png'
    }
]


/*-Sort JS method works by comparing two values and then it sorts through it. 
-Math.random returns back a number anywhere from 0 to less than -1.
-We are checking that it's either smaller than 0.5 or larger than 0.5. 1st value in array is both so will shuffle it based on that.
*/
cardArray.sort(() => 0.5 - Math.random()) //This is how you sort the array randomly. 


//Hash means were Looking for an id of grid. Going into docu and use query selector to search for the ID.

const gridDisplay = document.querySelector('#grid') 



function createBoard () {    //need an element for each item in the array
    for (let i = 0; i < 10; i ++) {      //For loop: start from 0 and as long as i is < than 10, we increment by 1.
        const card = document.createElement('img')  //create an img tag each time with the index number from 0-9.
        card.setAttribute('src', 'images/blank.png')  // set src attribute to the image. See path to the blank images file in console.
        console.log(card, i) 
    }  
}

createBoard()  // call function
