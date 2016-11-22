function Merge_Sort(array){
  if(array.length < 2) return array;

  var middle = Math.floor(array.length / 2);
  var subLeft = Merge_Sort(array.slice(0,middle));
  var subRight = Merge_Sort(array.slice(middle));

  return Merge(subLeft, subRight);
}

function Merge(a,b){
  var result = [];
  while (a.length > 0 && b.length > 0) {
    result.push(a[0] < b[0]? a.shift() : b.shift());
  }
  return result.concat(a.length? a : b);
}


//Test
var initialArray = [10, 5, 8, 20, 9, 14, 7, 11, 2];
var solutionArray = [2, 5, 7, 8, 9, 10, 11, 14, 20];

var sortedArray = Merge_Sort(initialArray);
var passed = JSON.stringify(sortedArray)==JSON.stringify(solutionArray);
console.log('Passed:' + passed);
