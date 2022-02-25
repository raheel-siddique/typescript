// console.log("createing class");
// createing class
//  function in ibject called method
var nameMy = /** @class */ (function () {
    function nameMy(n) {
        this.name = n;
    }
    return nameMy;
}());
var account = new nameMy("Raheel");
console.log(account);
