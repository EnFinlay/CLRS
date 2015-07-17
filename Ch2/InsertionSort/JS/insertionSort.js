// Eric Finlay - July 14, 2015
// Learning me some codes
// Implementing the Insertion Sort code found on pg. 39 of CLRS

var insertionSort = function(inArr) {
	var key;
	var i;
	// Starting at second value in Array so that we have room to swap
	for (var j = 1; j<inArr.length; j++){
		// key is the current value of the array
		key = inArr[j];
		// i is the place before j
		i = j-1;
		// start stepping backwards if the current array value is greather than key
		while(i>=0 && inArr[i] > key) {
			// swap values
			inArr[i+1] = inArr[i];
			// step back one
			i = i-1;
		}
		// right before this line, if the loop was entered, we have two
		// identical values in a row
		// This replaces the first one with the key
		// The +1 counteracts the -1 from line 19
		inArr[i+1] = key;
	}
}

var testArr1 = [1,2,3,4,5];
console.log(testArr1);
insertionSort(testArr1);
console.log(testArr1);

testArr1 = [1,3,2,4,5];
console.log(testArr1);
insertionSort(testArr1);
console.log(testArr1);

testArr1 = [5,4,3,2,1];
console.log(testArr1);
insertionSort(testArr1);
console.log(testArr1);