function reverseInteger(number){
	
	if (number >0){
	reverse = 0
	while (number>0) {
		reverse2 = number % 10
		reverse =reverse * 10 + reverse2
		number = Math.floor(number/10)
	}
	}
	else {
	    reverse2 = (number % 10)
	    reverse = reverse2
	    number = Math.floor(number/-10)
	    while (number>0) {
		reverse2 = number % 10
		reverse =reverse * 10 - reverse2
		number = Math.floor(number/10)
	}
	}
	return reverse
}
const x = reverseInteger(7564)
console.log (x)
