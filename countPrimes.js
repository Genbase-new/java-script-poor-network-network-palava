function countPrimes(number) {

for (counter = 1; counter <= number; counter++) {
    let primeCount = 0;
    //let counter1=0;
    for (count = 1; count <= counter; count++) {
        if ( counter % count == 0) {
            primeCount++;
            }
        }
     if (primeCount == 2) {
     
   //  counter1++;
    return counter1;
    }  
    
}

}

const x = countPrimes(10);

console.log(x);
