describe("sum()", function () {
    it("it takes an array, and returns the summary of the elements.", function () {
            assert.equal(10, sum([1, 2, 3, 4]));
        }
    );
});

describe("multiply()", function () {
    it("it takes an array, and returns the multiplies of the elements.", function () {
            assert.equal(24, multiply([1, 2, 3, 4]));
        }
    );
});

describe("reverse()", function () {
    it("it reverse the string", function () {
            assert.equal("ratset gaj", reverse("jag testar"));
        }
    );
});

describe("filterLongWords()", function () {
    it("it returns the values if their length is greater then i.", function () {
            assert.deepEqual(["john doe", "fairfield"], filterLongWords(["john doe", "fairfield", "iowa"], 4));
        }
    );
});