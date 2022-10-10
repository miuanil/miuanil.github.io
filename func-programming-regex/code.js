function sum(arr) {
    return arr.reduce((a,b) => a + b, 0);
}

function multiply(arr) {
    return arr.reduce((a,b) => a * b);
}

function reverse(myString) {
    return myString.split("").reverse().join("");
}

function filterLongWords(words, i) {
    return words.filter((a) => a.length > i);
}