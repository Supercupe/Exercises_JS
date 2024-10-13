//Julius Caesar protected his confidential information by encrypting it using a cipher. 
//Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. 
//If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
//In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
//Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). 
//It should return an encrypted string.

const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const encrypt = "abcedz"
function caesarCipher(encryption, shift_by){
    let result = "";
    for (const letter of encryption){
        if (ABC.includes(letter)){
            const index = ABC.indexOf(letter)
            const newIndex = (index + shift_by) % ABC.length;
            result += ABC[newIndex];
        }else{
            result += letter;  
        }
    }
    return result
}


console.log(caesarCipher(encrypt, 2))