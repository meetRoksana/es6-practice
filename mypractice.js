const fruits = ['Apples', 'Bananas', 'Grapes'];
const fruit = fruits.map(fruit => fruit.slice(0, -1) .toUpperCase());
console.log(fruit);