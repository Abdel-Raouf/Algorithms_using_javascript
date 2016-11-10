function linearSearch(array){
  for(var j=0; j <= array.length; j++){
    var key = array[j];
    if (key == 'v') {
      console.log(j);
    }//else{
    //   console.log(null);
    // }
  }
  return array;
}

//Test
var initialArray = ['w', 'h', 'd', 'v', 'z', 'd'];
var arrayFinder = linearSearch(initialArray);
