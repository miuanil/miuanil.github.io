const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];

var start = () => {
    console.log(arr);
    readline.question('Enter a number: ', number => {
        if (number === "stop") {
            console.log(getNumber(arr));
            return readline.close();
        } else {
            if (!isNaN(number)) {
                arr.push(parseInt(number));
            }
            console.log(`Number: ${number}`);
            start();
        }
    });
};

start();

function getNumber(myData) {
    return (myData.length === 0) ? 0 : myData[0] + getNumber(myData.slice(1));
}