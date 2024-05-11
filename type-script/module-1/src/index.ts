// problem 1:Repeated string n times
 function srepeatString(input:string,times:number):string{
    return input.repeat(times);
 }
//  console.log(repeatString"Rakib ",4));
// problem 2:returns the largest number in the array.

function findLargestNumber(input:number[]):number{
    if(input.length ===0){
        throw  new Error("Array is empty");
    }
    return Math.max(...input)
}
// console.log(findLargestNumber([30,99]))

// problem 3:returns a new array containing only the even numbers from the original array

function fillterEvenNumber(input:number[]):number[]{
    if(input.length ===0){
        throw new Error("Array is empty");
    }
    return input.filter(num=>num %2 ===0)
}
// console.log(fillterEvenNumber([3,4,5,6,8]))
//  problem 4:return revers array
function reverseArray <T>( arr:T[]):T[]{
    return arr.reverse();

}
// console.log(reverseArray(["Rakib","Karim"]));
// console.log(reverseArray([4,3,2,1]));
// problem 5:using interface

interface Student {
    name:string;
    age:number;
    grades:number[];
}
function calculateAverage(student:Student):number{
    if(student.grades.length === 0){
        throw new Error("Grates array is empty");
    }
    const sum=student.grades.reduce((total,next)=>total+next,0);
    const average= sum/student.grades.length;
    return average;
}
const student1:Student={
    name:"Rakib",
    age:16,
    grades:[34,45,33,55,67,77]
}

// console.log(calculateAverage(student1))

// problem 6:alias types
type Book={
    title:string;
    author:string;
    publishedYear:number;

}

function isRecentBook(book:Book):boolean{
    let currentDate=new Date().getFullYear();
    const sincePublication=currentDate-book.publishedYear;
    return sincePublication <=5 ?true:false;
}

const book1:Book={
    title:"Atto Kosta",
    author:"Rakib",
    publishedYear:2018
}
console.log(isRecentBook(book1))

// problem 7:check string
function logString(input:unknown):void{
    if(typeof input === 'string'){
        console.log(input)
    }else{
        console.error('Error:Input is not a String.');
    }
}

// logString("hello,Rakib");