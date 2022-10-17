describe("String.prototype.filter()", function () {
    it("it takes an array of banned words, then returns the string after removing all the banned words.", function () {
            assert.equal("This house is nice!", "This house is not nice!".filter("not"));
        }
    );
});


describe("Array.prototype.bubbleSort()", function () {
    it("it sorts an array of values using Bubble Sort algorithm", function () {
            assert.deepEqual([-2, 0, 1, 3, 4, 6], [6,4,0, 3,-2,1].bubbleSort());
        }
    );
});
