function mySqrt(number){
    for(let count =1; count<number;  count++){
        if (count * count > number){
        return count -1
        }
    }


}




const x=mySqrt(8);
console.log(x)
