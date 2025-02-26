function largestPrimeFactor(number) {
    let ans = [];
    let cnt = 0;

    for(let i = 2; i <= number; i++) {
        if(number%i == 0) {
            ans.push(i)

            while(number%i == 0) {
                number = number/i;
            }
        }
    }
    
    const large = ans.reduce((max, current) => Math.max(max, current), -Infinity)
    return large
}
  
  largestPrimeFactor(13195);