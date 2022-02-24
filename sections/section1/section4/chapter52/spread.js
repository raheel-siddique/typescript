var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log("new 52");
var array1 = ["raheel", 1, true];
var array2 = __spreadArray(__spreadArray(["rasim"], array1, true), [4, false,], false);
// access all array values from ...array1
console.log(array2);
