function bubble_sort(array){
  var swapped;
  do{
    swapped = false;
    for(var i=0; i < array.length; i++){
      if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  }while (swapped);
}

var initialArray = [10, 5, 8, 20, 9, 14, 7, 11, 2];

bubble_sort(initialArray);
console.log(initialArray);

//My explanation is that the algorithm is like a bottle of sparkling water: a bubble goes upwards until it
//meets a larger bubble on its way to the surface area or reach the surface itself. If a bubble meets a
//bigger one on its way they swap each other. This process is repeated until no swaps are needed.
//Hint: recommended for small arrays
//Running time:
  //worest-case: O(n^2)
  //best-case: O(n)
