// function newImage(){
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
// }

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png' //changes
pineTree.style.position = 'fixed' //stays in body
pineTree.style.left = '450px' //changes
pineTree.style.bottom = '200px' //changes
document.body.append(pineTree) //stays in body (but in the parenthesis has 'character')
newImage()

function newImage(src, left, bottom) {
    let character = document.createElement('img');
    character.src = src;
    character.style.position = 'fixed';
    character.style.left = left;
    character.style.bottom = bottom;
    document.body.append(character);
}

let greenCharacterSrc = 'assets/green-character.gif';
let greenCharacterLeft = '100px';
let greenCharacterBottom = '100px';
newImage(greenCharacterSrc, greenCharacterLeft, greenCharacterBottom);

let pineTreeSrc = 'assets/pine-tree.png';
let pineTreeLeft = '450px';
let pineTreeBottom = '200px';
newImage(pineTreeSrc, pineTreeLeft, pineTreeBottom);

let treeSrc = 'assets/tree.png';
let treeLeft = '200px';
let treeBottom = '300px';
newImage(treeSrc, treeLeft, treeBottom);

let pillarSrc = 'assets/pillar.png';
let pillarLeft = '350px';
let pillarBottom = '100px';
newImage(pillarSrc, pillarLeft, pillarBottom);

let crateSrc = 'assets/crate.png';
let crateLeft = '150px';
let crateBottom = '200px';
newImage(crateSrc, crateLeft, crateBottom);

let wellSrc = 'assets/well.png';
let wellLeft = '500px';
let wellBottom = '425px';
newImage(wellSrc, wellLeft, wellBottom);