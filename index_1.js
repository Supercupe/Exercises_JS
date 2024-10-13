//Create a function that takes an array of numbers 
//and return "Boom!" if the digit 7 appears in the array. 
//Otherwise, return "there is no 7 in the array".

const numbers = [7, 7, 6, 5, 8, 3, 4, 8, 5, 7, 77]

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