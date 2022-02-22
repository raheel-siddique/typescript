// console.log("new 20");
// in core types:
// Enum is also not in js
// enum{NEW, OLD} Added By ts autmatically enumerated global constant 
// identifiers
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "this is first";
})(Role || (Role = {}));
var person = {
    name: "Raheel",
    age: 20,
    role: Role.ADMIN
};
console.log(person.name);
