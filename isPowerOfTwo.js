function isPowerOfTwo(number){

result=false;
for(let multiplier=1; multiplier<=number; multiplier++){

let power= 2**multiplier;

	if (power==number){
	
	result=true;
	}


}


    return result;




}

const x=isPowerOfTwo(16);

console.log(x);
