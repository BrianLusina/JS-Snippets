var minMax = require('./minmax');

describe("MinMax Test Cases", function(){
    it("Test 1", function(){
        var test = function(arr, res){
            var minmax = new minMax();
            expect(minmax.getMaxMin(arr)).toEqual(res);
        };

        var i, r;
        test([1,2,3,4,5], [1,5]);
        test([2334454,5], [5, 2334454]);
    
        for(i = 0; i < 20; ++i){
            r = Math.random();
            test([r], [r,r]);
        }
    });
})