
function multiplesOf3Or5(number) {
let arr = []
let sum = 0
  for(let i = 3; i < number; i++) {
    if(i%3 == 0 || i%5 == 0){
      arr.push(i)
    }
  }
  //console.log(arr)

  for(let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  console.log(sum)
 
}

multiplesOf3Or5(10);