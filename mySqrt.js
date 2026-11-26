function mySqrt(number){
    for(let count =1; count<number;  count++){
        if (count * count > number){
        return count -1
        }
    }


}




console.log (mySqrt(16));
