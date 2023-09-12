let arr = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];

console.log(arr.filter((item,) => {
    return item.id >1
}));