function isPalin(n) {
    return n.toString() === n.toString().split("").reverse("").join("")
}

function largestPalindromeProduct(n) {
    let max_no = Math.pow(10, n) -1
    let min_no = Math.pow(10, n-1)

    //console.log(max_no,min_no)

    let maxPalin = 0;

    for(let i = max_no; i >= min_no; i--) {
        for(let j = i; j >= min_no; j--) {
            product = i * j;
            if(product < maxPalin)  break;
            if(isPalin(product)) {
                maxPalin = Math.max(maxPalin, product)
            }
        }
    }

    console.log(maxPalin);
    
   // return true;
  }
  
  largestPalindromeProduct(2);