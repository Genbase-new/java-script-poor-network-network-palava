function hammingWeight(number) {
let binaryNumber = 0;
let result = 0;
while (number > 0 ) {
    let digit = number % 2;
    binaryNumber = (binaryNumber * 10) + digit;
    number = number/2;
    number = Math.floor(number);
    }
while (binaryNumber > 0) {
let binaryFinal =  binaryNumber % 10;
result = (result * 10) + binaryFinal;
binaryNumber = binaryNumber / 10;
binaryNumber = Math.floor(binaryNumber);
}
return result;
}




const x= hammingWeight(11);

console.log(x);
