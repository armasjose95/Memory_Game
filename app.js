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


const cardsChosen = [] // We are getting the name back from our random card array and we put it into this array.

const cardsChosenIds = [] // when we push the card in, we're pushing the name in but also pushing its id in.



function createBoard () {    //need an element for each item in the array
    for (let i = 0; i < cardArray.length; i ++) {      //For loop: get array's lenght(12),loops as many elements in array, we increment by 1.
        const card = document.createElement('img')  //create an img tag each time with the index number from 0-9.
        card.setAttribute('src', 'images/blank.png')  // set src attribute to the image. See path to the blank images file in console.
        card.setAttribute('data-id' , i) // each card/image has an id that is unqiue
        card.addEventListener('click', flipCard) // only want to call function flipCard if we click on the card (callback)
        gridDisplay.append(card)
    }  
}

createBoard()  // call function


function checkMatch() {
    const cards = document.querySelectorAll('#grid img') // Looks for ALL the cards with the img elements that live inside my div with the id of grid.
    console.log(cards)

    console.log('Check for Match!')
    if (cardsChosen[0] == cardsChosen[1]) {   //Get both of the items in my chosenCard array & check if they match
        alert('You matched cards!') // if true then we know it's a match
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png') //first img turns white to indicate you found a match
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')//second img turns white to indicate you found a match

    }
}


function flipCard() {
    console.log(cardArray) // consoling cardArray after the shuffle
    const cardId = this.getAttribute('data-id')    //This lets us interact with whatever element we click. getAttribute to get its data-id & saving it as cardId
    cardsChosen.push(cardArray[cardId].name) //push in the name of each object to know exactly which card we clicked & pass it into our array.
    cardsChosenIds.push(cardId) // push in the card id into the chosen ids
    console.log(cardsChosenIds)
    console.log('clicked', cardId) // Show us cardId after each click because we pass it through
    console.log(cardsChosen)
    this.setAttribute('src' , cardArray[cardId].img) //when card flips we see the image
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
