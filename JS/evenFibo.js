//Tabulation
function fiboEvenSum(n) {
    let arr = [1, 2];
    let evenSum = 2;

    while(true) {
        let nextNo = arr[arr.length-1] + arr[arr.length-2]

        if (nextNo > n) {
            break
        }

        arr.push(nextNo)

        if(nextNo%2 == 0) {
            evenSum += nextNo
        }
    }
    return evenSum


}

fiboEvenSum(34)