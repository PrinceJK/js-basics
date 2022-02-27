//performing a task
// function greet(name, lastName){
//     console.log('Hello ' + name +' ' + lastName);
// }

// //Calculate a value
// function square(number){
//     return number * number;
// }
//let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function findMissing(arrOfNumbers){
    let sumOfArray = 0;
    if(isNaN(arrOfNumbers)){
        return NaN;
    }
    for(let i = 0; i < arrOfNumbers.length; i++){
        sumOfArray += arrOfNumbers[i];
        continue;
    }
    if(sumOfArray === 45){
        return -1
    }
    return 45 - sumOfArray;
}




console.log(square(2));