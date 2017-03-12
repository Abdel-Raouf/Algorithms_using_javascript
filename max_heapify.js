function BuildMaxHeap(array){
  //to get all the parent nodes as i / 2
  for(var i = Math.floor(array.length / 2); i >= 0; i--){
    maxHeapify(array, i);
  }
  return array;
}

function maxHeapify(array, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var largest = i;
  if(left <= array.length && array[left] > array[largest]){
    largest = left;
  }
  if(right <= array.length && array[right] > array[largest]){
    largest = right;
  }
  if(largest != i){
        var temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        maxHeapify(array, largest); // enter recursion when there is a value in left or the right node that is bigger than the parent node
  }
}

//Test
var initialArray = [16, 4, 3, 9, 1, 2, 8, 14, 7, 10];
console.log(BuildMaxHeap(initialArray));

/*
Note: when you start with different structure on a heap you get different results so this depend on
how child is insereted and bubbled-up(swapped with parents), which will stop as soon as it is smaller than its parent
of which there can be multiple valid candidates for a position in a heap.

Running Time: time to fix the relationships among the elements of size n rooted at given node i is big-theta of one
while the childern's subtrees each have size at most 2n/3, therefore T(n) <= T(2n/3) + Big theta of one; that is T(N) = O(log(n))
*/
