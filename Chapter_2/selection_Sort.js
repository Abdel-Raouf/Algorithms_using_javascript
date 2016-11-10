function selection_Sort(array){
  for(var i=0; i < array.length - 1; i++){
    var min = i;
    for(var j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}



//Test
var initialArray = [10, 5, 8, 20, 9, 14];
var solutionArray = [5, 8, 9, 10, 14, 20];

var sortedArray = selection_Sort(initialArray);
var passed = JSON.stringify(sortedArray)==JSON.stringify(solutionArray);
console.log('Passed:' + passed);

// pseudo-code impl
// for i= 1 to length[A]-1
//   do min = i
//   for j = i+1 to lenght[A]
//     do if A[j] < A[min]
//       then min = j
//   temp = A[i]
//   A[i] = A[min]
//   A[min] = temp
