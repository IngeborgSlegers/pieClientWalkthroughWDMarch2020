//Array destructuring is a simplified method of extracting multiple properties from an array.
//It creates a pattern that describes the kind of value you are expecting. It uses position.

let LotRArray = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
console.log(LotRArray[0]);
let firstElementInLotRArray = LotRArray[0];
console.log(LotRArray[1]);
console.log(LotRArray[2]);

let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
console.log(first, second, third);

let [a, , c] = ['Mercury', 'Venus', 'Earth'];
console.log(a,c);

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let [first, , third, ...others] = planets;
console.log(first);
console.log(third);
console.log(others);
console.log(...others);

const [fruit, setFruit] = useState('banana');
let fruitStateVariable = useState('banana'); //returns a pair (not pear)
let fruit = fruitStateVariable[0]; //first item in the pair
let setFruit = fruitStateVariable[1]; //second item in the pair