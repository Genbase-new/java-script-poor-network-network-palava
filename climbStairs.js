function climbStairs(totalSteps) {
let count = 1;
while ( count < totalSteps ) {
    count++;
}
let counter = 0;
for ( shunt = 0; shunt < totalSteps; shunt +=2 ) {
    count += 1;
}
return count + counter;
}

const x= climbStairs(10);

console.log(x);
