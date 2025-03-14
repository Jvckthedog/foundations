let user = {
    name: "Jordan",
    age: 29,
    isAdmin: true,
}; 

// let key = prompt("what do you want to know about the user?", "name");

// alert( user[key] ); // when "name" is entered, it returns "Jordan"

// let fruit = prompt("which frust to buy?", "apple");

let fruit2 = 'apple';
let bag2 = {
    [fruit2 + 'computers']: 5
}; 

// alert(fruit2.bag2); 

function makeUser(name, age) {
	return {
		name: name,
		age: age,
	};
};

let secondUser = makeUser("Jordan", 29);
// alert(secondUser.name); // Jordan
// alert(secondUser.age); // 29

let obj = {
	for: 1,
	let: 2, 
	return: 3, 
}; 

console.log(obj.for, obj.let, obj.return); 

// in operator 
let user3 = {};

console.log(user3.noSuchProperty === undefined); 

// in operator 
let user4 = {name: "Jordan", age: 29}; 

console.log("age" in user4); 

// Intermetdiate/advanced arrays
function sumOfTrippledEvenes(array) {
    let sum = 0; 
    for (let i=0; i <array.length; i++) {
        if (array[i] % 2===0) {
            const tripleEvenNumber = array[i] *3;
            sum += tripleEvenNumber;
        }
    }
    return sum;
}; 

function addOne(num) {
    return num +1;
}

// map method 
const arr = [50, 51, 52, 53, 54];
const mappedArr = arr.map(addOne);

console.log(mappedArr); // 51, 52, 53, 54, 55

// filter method 
function isOdd(num) {
    return num % 2 !== 0; 
}

const arr2 = [1,2,3,4,5];
const oddNums = arr2.filter(isOdd);
console.log(oddNums);
console.table(oddNums); // creates at table.

// reduce 
const arr3 = [1,2,3,4,5];
const productOfAllNumbers = arr3.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNumbers);



