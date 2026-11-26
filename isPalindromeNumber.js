function isPalindromeNumber(number){
let input = number;
reverse =0;

while (number>0){
    reverse = reverse*10 + number%10;
    number = number/10;
    number = Math.floor(number);
    }
  //  console.log(reverse);
    if(input==reverse){
    
    return true;
    }
	else {
	
	return false;
	
	}


}


const x = isPalindromeNumber(121);

console.log(x);
