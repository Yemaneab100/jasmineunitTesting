const { add, subtract, multiply, divide } = require('./math');

describe("add function", function(){
    it("should add two numbers correctly", function(){
        const num1 = 3;
        const num2 = 2;

        const result = add(num1, num2);

        expect(result).toBe(5);
    });

    it("should handle negative numbers", function(){
        const num1 = -5;
        const num2 = 2

       const result = add(num1, num2);

       expect(result).toBe(-3);

    });

    
});

describe("subtruct function", function(){

    it("should subtruct a number from another number correctly", function(){
        const num1 = 3;
        const num2 = 2;

        const result = subtract(num1, num2);

        expect(result).toBe(1);
    });

    it("should also hundle negative numbers", function(){
        const num1 = -3;
        const num2 = 2

        const result = subtract(num1, num2);

        expect(result).toBe(-5);
    });
});