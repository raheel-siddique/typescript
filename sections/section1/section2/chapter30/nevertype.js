"use strict";
// console.log("new 30");
function addNew(message, code) {
    throw { message: message, errorCode: code };
}
addNew("error is occured", 500);
