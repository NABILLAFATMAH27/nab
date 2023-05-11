let arr = [8, 7, 7, 9, 5, 4, 2, 9]

arr.sort((a,b)=>a-b)

let median;
if(arr.length % 2 !==0){
  let middelIndex = Math.floor(arr.length/2)
  median = arr[middelIndex]
}
else{
  let middelIndex = Math.floor(arr.length/2)
  median = (arr[middelIndex] + arr[middelIndex-1])/2
}

console.log(median);
