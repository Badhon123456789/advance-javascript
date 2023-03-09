const students = [
    {id: 37, name: "Omor Gull"},
    {id: 42, name: "Jon Butler"},
    {id: 12, name: "Riaz Hossain"},  
    {id: 71, name: "Dipjol"}
];

// const newArray = [];
// const arrayElement = students.map(function(element){
//     const allElement = element.name
//     newArray.push(allElement);
// });
// console.log(newArray);


const names = students.map(x => x.name);

const ids = students.map(x => x.id);
console.log(names);
console.log(ids);


const bigger = students.filter(x => x.id > 40);

const biggerOne = students.find(x => x.id > 40);

console.log(bigger);
console.log(biggerOne);