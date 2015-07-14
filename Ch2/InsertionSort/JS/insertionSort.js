// Eric Finlay - July 14, 2015
// Learning me some codes
// Implementing the Insertion Sort code found on pg. 39 of CLRS

var insertionSort = function(inArr) {
	var key;
	var i;
	for (var j = 1; j<inArr.length; j++){
		key = inArr[j];
		i = j-1;
		while(i>0 && inArr[i] > key) {
			inArr[i+1] = inArr[i];
			i = i-1;
		}
		inArr[i+1] = key;
	}
}

var testArr1 = [1,2,3,4,5];
console.log(testArr1);
insertionSort(testArr1);
console.log(testArr1);

var testArr2 = [1,3,2,4,5];
console.log(testArr2);
insertionSort(testArr2);
console.log(testArr2);
