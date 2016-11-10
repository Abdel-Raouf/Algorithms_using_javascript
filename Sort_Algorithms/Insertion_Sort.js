function insertion_Sort(array){
	for(var j=1; j < array.length; j++){
		var key = array[j];
		for(var i = j - 1; i >= 0; i--){
			if(array[i] <= key) break;
				array[i+1] = array[i];
		}
		array[i+1] = key;
	}
	return array;
}

//Test
var initialArray = [10, 5, 8, 20, 9, 14];
var solutionArray = [5, 8, 9, 10, 14, 20];

var sortedArray = insertion_Sort(initialArray);
var passed = JSON.stringify(sortedArray)==JSON.stringify(solutionArray);
console.log('Passed:' + passed);

// Pseudo-code impl
// for j = 2 to length[A]
// 	do key = A[j]
// 	>insert A[j] into the sorted sequence A[1 ... j-1]
// 	i = j - 1
// 	while i > 0  and A[i] > key
// 		do A[i+1] = A[i]
// 			i = i - 1
// 	A[i+1] = key
