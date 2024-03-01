// function newImage(){
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
// }

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png' //changes
// pineTree.style.position = 'fixed' //stays in body
// pineTree.style.left = '450px' //changes
// pineTree.style.bottom = '200px' //changes
// document.body.append(pineTree) //stays in body (but in the parenthesis has 'character')
// newImage()

function newImage(src, left, bottom) {
    let character = document.createElement('img'); //used character as a generic way of adding each new image/character to the function.
    character.src = src; //made the src = src so that each new character has a parameter that changes
    character.style.position = 'fixed';
    character.style.left = left + 'px'; //changes and added px for less repetition later
    character.style.bottom = bottom + 'px'; //changes and ^^
    document.body.append(character);
    return character;
}

function newItem(src, left, bottom){
    let character = newImage(src, left, bottom); //included src, left, and bottom on both functions to be able to declare in the newItem function that I was also calling for the src, left, and bottom parameters in the newImage function.
    character.addEventListener('dblclick', () => {
        character.remove()
    })
}
newImage('assets/green-character.gif', 100, 100) //realized I could put the parameters as items inside of the function
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
//done with newImage
//starting newItem

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
