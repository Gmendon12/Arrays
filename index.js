//1. Write a program that takes an array as input from the user and find out the product of the elements.

const Find_Prod = (array, N) => 
{
 let result = 1;
 for (let i = 0; i<N;i++)
 result = result*array[i];

return result;
};

//2.Write a program which takes an array as input from the user and find out the sum of the array elements.

const Find_Sum = (array, N) => 
{
  let result = 0;
 for (let i = 0; i<N;i++)
 result = result + array[i];

return result;

};
 
//3.You are given an array A containing N integer elements and an integer K and your task is to return the count of occurrences of K in array A

const findCount = (N, K, Arr) => 
{
    var count = 0; 
    for (let i=0; i<N; i++){
      if (Arr[i] === K){
        count += 1;
      }
    }
    return count;
};

//4. Even or Odd

const findEvenOdd = (N, Arr) => 
{
    let odd = 0;
    let even = 0;
    let p=[2];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 == 0){
        even=even+Arr[i];
      }
      else{
        odd=odd+Arr[i];
      }
    }
    p[0]=even;
    p[1]=odd;
    return p;
};

//5. Write a program which takes an array as input from the user and a number.


const Find_Num = (array,N,M) => 
{
  for(let i=0; i<N; i++)
  {
    if(array[i] == M)
    {
       return "YES"
    }
  }
  return "NO"
};

//6. Higher age

const highAge = (N, Arr) => 
{
   let arr=[];
    let j=0;
    for(let i=0; i<N; i++){
      if(Arr[i]>=18){
        arr[j++]=Arr[i];
      }
    }
    return arr; 
};

//7. You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

const Inc_Arr = (array,N) => 
{
  array.forEach(function(element){
    console.log(element + 1);
  })
};

//8. Pass or Fail

const isAllPass = (N, Arr) => 
{
   let count=0
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count+=1
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES"
  }
  return "NO"  
};

//9. Unique color tshirt


function Unique_Shirts (arr,N) {
    let temp=" "
    let dress=0;
    let i,j;
    for(i=0;i<N;i++){
      let compare=0;
      for(j=0;j<N;j++){
      if(arr[i]==arr[j]){
          compare++;
      }
      
      }
      if(compare==1){
      temp=temp+arr[i];
      dress++;
      }
    }
      return dress;
   }

//10. Min and Max

 
function arrayMin(arr) {
    let min=arr[0];
    for(let i =1 ; i<arr.length; i++){
      if(min>arr[i]){
        min = arr[i];
      }
    }
    return min;
  }
  
  function arrayMax(arr) {
    let max=arr[0];
    for(let i=1;i<arr.length; i++){
      if(max<arr[i]){
      max = arr[i];
      }
    }
  return max;
  }

//11. Birthday Game

function Birthday_Game(arr,D ,M) {
    let counter = 0;
    for(let i = 0; i < arr.length - 1; i++){
        let subArray = arr.slice(i, i+M);
        if (subArray.length === M) {
        let sum = subArray.reduce((a,b) => a + b, 0);
        if(sum === D){
        counter += 1;
        }
    }
    }
    return counter;
  }