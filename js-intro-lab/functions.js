/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (typeof expected === 'object' && typeof found === 'object') {
        let res = expected.reduce((a, b) => a && found.includes(b), true);
        return res ? "TEST SUCCEEDED" : "TEST FAILED.  Expected " + expected + " found " + found;
    } else {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

console.log("\n");

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

function isVowel(a) {
    let vovels = ['a', 'e', 'i', 'o', 'u'];
    if (a.length != 1) return false;
    return vovels.find(function (element) { return element == a.toLowerCase() }) !== undefined;
}

console.log("\n");
console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('string') is false  " + myFunctionTest(false, isVowel('string')));
console.log("Expected output of isVowel('y') is false  " + myFunctionTest(false, isVowel('y')));

function sum(myArray) {
    let total = 0;
    for (i = 0; i < myArray.length; i++) total += myArray[i];
    return total;
}

console.log("\n");
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of sum([2,6,3,1]) is 12  " + myFunctionTest(12, sum([2, 6, 3, 1])));
console.log("Expected output of sum([3,3,3,3,3,3,3]) is 21  " + myFunctionTest(21, sum([3, 3, 3, 3, 3, 3, 3])));


function multiply(myArray) {
    let total = 1;
    for (i = 0; i < myArray.length; i++) total *= myArray[i];
    return total;
}

console.log("\n");

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of multiply([2,6,3,1]) is 36  " + myFunctionTest(36, multiply([2, 6, 3, 1])));
console.log("Expected output of multiply([3,3,3,3,3,3,3]) is 2187  " + myFunctionTest(2187, multiply([3, 3, 3, 3, 3, 3, 3])));

function reverse(myString) {
    return myString.split("").reverse().join("");
}

console.log("\n");
console.log("Expected output of reverse('jag testar') is ratset gaj  " + myFunctionTest('ratset gaj', reverse('jag testar')));
console.log("Expected output of reverse('fairfield') is dleifriaf  " + myFunctionTest('dleifriaf', reverse('fairfield')));
console.log("Expected output of reverse('iowa city') is ytic awoi  " + myFunctionTest('ytic awoi', reverse('iowa city')));

function findLongestWord(myArray) {
    return myArray.reduce((a, b) => a.length < b.length ? b : a, "");
}


console.log("\n");
console.log("Expected output of findLongestWord(['john doe', 'fairfield', 'iowa']) is fairfield  " + myFunctionTest('fairfield', findLongestWord(["john doe", "fairfield", "iowa"])));
console.log("Expected output of findLongestWord(['chicago', 'miami', 'new york', 'austin']) is new york  " + myFunctionTest('new york', findLongestWord(['chicago', 'miami', 'new york', 'austin'])));
console.log("Expected output of findLongestWord(['turkey', 'netherlands', 'norway']) is netherlands  " + myFunctionTest('netherlands', findLongestWord(['turkey', 'netherlands', 'norway'])));

function filterLongWords(words, i) {
    return words.filter((a) => a.length > i);
}

console.log("\n");
console.log("Expected output of filterLongWords(['john doe', 'fairfield', 'iowa'], 4) is ['john doe', 'fairfield']  " + myFunctionTest(["john doe", "fairfield"], filterLongWords(["john doe", "fairfield", "iowa"], 4)));
console.log("Expected output of filterLongWords(['chicago', 'miami', 'new york', 'austin'], 6) is ['chicago', 'new york']  " + myFunctionTest(["chicago", "new york"], filterLongWords(['chicago', 'miami', 'new york', 'austin'], 6)));
console.log("Expected output of filterLongWords(['turkey', 'netherlands', 'norway']) is netherlands  " + myFunctionTest(['turkey', 'netherlands', 'norway'], filterLongWords(['turkey', 'netherlands', 'norway'], 3)));

const a = [1, 3, 5, 3, 3];

const b = a.map(function (elem) { return elem * 10;});

console.log("\n");
console.log("Array: " + a);
console.log("---------Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:");
console.log("Expected output 'a) multiply each element by 10' is [10,30,50,30,30]  " + myFunctionTest([10,30,50,30,30], b));

const c = a.filter(function (elem) { return elem === 3; });
console.log("Expected output 'b) return array with all elements equal to 3;' is [3,3,3]  " + myFunctionTest([3,3,3], c));

const d = a.reduce(function (prevValue, elem) {return prevValue * elem;});

console.log("Expected output 'c) return the product of all elements;' is 135 " + myFunctionTest(135, d));