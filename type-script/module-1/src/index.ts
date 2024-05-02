const numbers:number[]=[1,3,4,56,5,6];
const double:number[]=numbers.map(num=>num*2);
let evenNumber:number[]=numbers.filter(num=>num%2==0);

interface Person{
    name:string;
    age:number;
    hobbies:string[];
}
const person:Person={
    name:"Rakib",
    age:30,
    hobbies:["Reading","Traveling","Cooking"]
}
console.log(person.hobbies[0])
person.hobbies.push("Gardening");
console.log(person.hobbies)