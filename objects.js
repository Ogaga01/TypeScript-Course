function brave() {
    return { name: 'Aghogho', age: 23 };
}
brave();
var createUser = function (user) {
    return { name: user.name, age: user.age, isAvctive: user.isAvctive, isPaid: user.isPaid };
};
console.log(createUser({ name: 'Jude', age: 42, isAvctive: true, isPaid: true }));
