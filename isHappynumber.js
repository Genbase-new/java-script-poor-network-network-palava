function isHappy(number){
	for (count = 1; count<=20; count++){
	number = String(number)
	total = 0;
	for (digit of number){
		digit = Number(digit);
		square = digit * digit;
		total = total + square;
	}
	if (total === 1){
		return true;
	}
	number = total;
	}
	return false;
	
}

const x = isHappy(2);
console.log(x)
