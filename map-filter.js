const numbers = [13, 56, 35, 23, 23]


const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const square = element * element;
    output.push(square);
}
console.log(output);


const arrayElement = numbers.map(function(element, index){
    console.log(element, index);
});


function square0(element){
    return element * element;
}
const result0 = numbers.map(square0);
console.log(result0);


const result1 = numbers.map(function square1(element){
    return element * element;
});
console.log(result1);


const square2 = x => x * x;
const result2 = numbers.map(square2);
console.log(result2);


const square3 = numbers.map(element => element * element);
console.log(square3);


const square4 = numbers.map(x => x * x);
console.log(square4);


const filtering = numbers.filter(i => i > 20);
console.log(filtering);


const filtering1 = numbers.filter(i => i > 100);
console.log(filtering1);


const isThere = numbers.find(a => a > 20);
console.log(isThere);
