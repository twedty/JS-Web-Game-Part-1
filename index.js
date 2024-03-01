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
}

let greenCharacterSrc = 'assets/green-character.gif';  //you can see the src, left, and bottom as changing parameters with each new character being added
let greenCharacterLeft = '100';
let greenCharacterBottom = '100';
newImage(greenCharacterSrc, greenCharacterLeft, greenCharacterBottom);

let pineTreeSrc = 'assets/pine-tree.png';
let pineTreeLeft = '450';
let pineTreeBottom = '200';
newImage(pineTreeSrc, pineTreeLeft, pineTreeBottom);

let treeSrc = 'assets/tree.png';
let treeLeft = '200';
let treeBottom = '300';
newImage(treeSrc, treeLeft, treeBottom);

let pillarSrc = 'assets/pillar.png';
let pillarLeft = '350';
let pillarBottom = '100';
newImage(pillarSrc, pillarLeft, pillarBottom);

let crateSrc = 'assets/crate.png';
let crateLeft = '150';
let crateBottom = '200';
newImage(crateSrc, crateLeft, crateBottom);

let wellSrc = 'assets/well.png';
let wellLeft = '500';
let wellBottom = '425';
newImage(wellSrc, wellLeft, wellBottom);
//done with newImage
//starting newItem




function newItem(src, left, bottom){
    let character = newImage(src, left, bottom); //included src, left, and bottom on both functions to be able to declare in the newItem function that I was also calling for the src, left, and bottom parameters in the newImage function.
    character.addEventListener('dblclick', () => {
        character.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
