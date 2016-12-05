function binary_search(array, value){
  var mid = Math.floor(array.length / 2);

  if(array[mid] === value){
    console.log('Match: ','mid:',array[mid], 'value:',value);
    return mid;
  }else if(array[mid] > value && array.length > 1){
    console.log('Mid lower: ', 'mid:', array[mid], 'value:',value);
    return binary_search(array.splice(0, mid), value);
  }else if(array[mid] < value && array.length > 1){
    console.log('Mid higher: ','mid:', array[mid],'value:', value);
    return binary_search(array.splice(mid, array.length - 1), value);
  }else{
    console.log('Not there:', value);
    return -1;
  }
}

//var solutionArray = [2, 5, 7, 8, 9, 10, 11, 14, 20];

var initialArray = [10, 5, 8, 20, 9, 14, 7, 11, 2];

initialArray.sort(function(a, b){
  return a - b;
});

var answer = binary_search(initialArray, 5);
console.log(answer);
