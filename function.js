"use strict";
exports.__esModule = true;
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return 'User Logged In';
};
loginUser('Ogee', 'ogig');
var addNum = function (amt) {
    return amt + 2;
};
addNum(2);
// function myVal(val: number): boolean {
//     if (val > 5) {
//         return true
//     } else {
//         return 'Val is < five'
//     }
// }
// myVal(6)
var heroes = ['thor', 1, 'spiderman', 'black widow', 54];
heroes.map(function (hero) {
    return "my name is ".concat(hero);
});
function logConsole(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
