//Create a function that takes an array of numbers 
//and return "Boom!" if the digit 7 appears in the array. 
//Otherwise, return "there is no 7 in the array".

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function boom(numbers_array){
    let found = false;
    for (let number of numbers_array){
        if (number == 7){
            console.log("boom")
            found = true
            break;
        }
    }
    if (!found){
        console.log("There is no 7 in the array")
        }
}

boom(numbers)