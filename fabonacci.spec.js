const { fabonacci } = require('./fabonacci');

describe("fabonaci", function(){
    it("should calculate a fabonacci of any number", function(){
        const result = fabonacci(5);
        const expected = [ 0, 1, 1, 2, 3 ];

        expect.result.toBe(expected);
    })
})