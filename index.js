// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    let name_1 = [...cats, name];
    return name_1;
}

function prependCat(name) {
    let name_1 = [name, ...cats];
    return name_1;
}

function removeLastCat() {
    let catsCopy = cats.slice(0, cats.length - 1);
    return catsCopy;
}

function removeFirstCat() {
    let removeCats = cats.slice(1);
    return removeCats;
}