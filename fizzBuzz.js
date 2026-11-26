function fizzBuzz(number){

		if(number%3==0){
		return "Fizz";
		
		}
		
		else if(number%5==0){
		return "Buzz";
		
		}
		
		else if(number%3==0 && number%5){
		return "FizzBuzz";
		
		}
		
		else{
		
		number=String(number)
		return number;
		
		
		
		}

}

const x=fizzBuzz(34);
console.log(x);
