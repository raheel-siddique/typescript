console.log("new 53");
// rest paramter means you can put multiple values like array  
var addNew = function (a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return a + numbers;
};
console.log(addNew(2, 12, 34, 5, 46, 57, 78));
