
////////Assignment 1
///////point1
let arrayNumber = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];
const asendArray = function (array) {
    let newArray = [];
    newArray = array
    newArray.sort((a, b) => a - b)
    return console.table(newArray);

}
asendArray(arrayNumber);
const desandArray = function (array) {
    let newArray = [];
    newArray = array;
    newArray.sort((a, b) => b - a)
    return console.table(newArray)

}
desandArray(arrayNumber)

/////point2
const filterArray1=function(array,combarNum){
    let newArr=[];
    for(index in array){
        if(array[index]>combarNum){
            newArr.push(array[index])
        

        }
    }
    return console.log(newArr)

}
const newFilterArray =filterArray1(arrayNumber,5)
// console.log(`Filter array= ${newFilterArray}`)
// const filterAray5 = arrayNumber.filter(arrayNumber => arrayNumber > 5)
// console.log(filterAray5)



//////point3
let maxNumber = Math.max(...arrayNumber)
let max = Math.max(...neArray)
console.log(`Max number is ${maxNumber}`)
let minNumber = Math.min(...arrayNumber)
console.log(`Min number is ${minNumber}`)

/////point4  
console.log(Array.from(arrayNumber, (x) => x * 5));


/////poin5 Remove repeated numbers from the array.
let removRepated = function (array) {
    let newArr=[]
    for(let i=0;i<array.length;i++){
        if(newArr.indexOf(array[i])==-1){
            newArr.push(array[i])
        }
    }
    return console.log(newArr)
}
removRepated(arrayNumber)

console.log("************************************")
console.log("************************************")
////////////////Count how many even number exists in the array
function evenNumbers(array) {
    let newArray = []
    newArray = array
    let count = 0;
    for (let i of array) {
        if ((newArray[i] % 2) == 0) {
            count++;

        }
    }
    let stringArray = newArray.join("*")
    return console.log(`even numbers are ${count}
    ${stringArray}`)
}
evenNumbers(arrayNumber)



console.log("************************************")

//////////////////Assignment 2

function randomArray(minNum, maxNum, arrlength) {
    let arrayNumbers = [];
    if (arrlength % 2 == 0) {
        while (arrayNumbers.length < arrlength) {
            let numbers = ((Math.floor(Math.random() * maxNum)));
            if (numbers >= minNum) {
                arrayNumbers.push(numbers);
                arrayNumbers.push(numbers);


            }
        }

    }
    return arrayNumbers;
}
console.log(randomArray(20, 30, 6))

console.log("************************************ Assignment 3 ")

//////////////////Assignment 3 

function shuffleArray(array) {
    return console.log(array.sort(() => Math.random() - 0.4))
}
shuffleArray(arrayNumber)

console.log("************************************")


///////////////////Assignment 4
// let studentArrayCourse = [
//     [stud1, 95, 78, 100, 88, 100],
//     [stud_2, 60, 79, 90, 50, 89],
//     [stud_3, 99, 89, 100, 75, 90],
//     [stud1_4, 85, 69, 80, 91, 96]
// ];

let studentArrayCourse = [[]];
let colum = 4;
let row = 5;

for (i = 0; i < row; i++) {
    for (j = 0; j < colum; j++) {

        let grade = Number(prompt(`pleas enter grade student ${i + 1} in course${j + 1}`))
        studentArrayCourse[i][j] = grade
    }
}
console.log(studentArrayCourse);




