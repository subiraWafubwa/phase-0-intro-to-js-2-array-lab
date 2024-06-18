// Initial cats array
let cats = ["Milo", "Otis", "Garfield"];

// Destructively appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-destructively appends a cat to the cats array and returns a new array
function appendCat(name) {
    return [...cats, name];
}

// Non-destructively prepends a cat to the cats array and returns a new array
function prependCat(name) {
    return [name, ...cats];
}

// Non-destructively removes the last cat from the cats array and returns a new array
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

// Non-destructively removes the first cat from the cats array and returns a new array
function removeFirstCat() {
    return cats.slice(1);
}

module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};
