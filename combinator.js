function combine(arr1, arr2, combineParameter){
	var newArr = [];
	arr1.forEach(function(elm1, idx1){
		arr2.forEach(function(elm2, idx2){
			newArr.push(elm1 + combineParameter + elm2)
		})
	});
	return newArr
}

function recursiveCombine(inputArray, combineParameter){
	var parentArray = inputArray,
		parArrLen = parentArray.length;
	if(parArrLen > 1){
		var combinedArr = combine(parentArray[parArrLen-1], parentArray[parArrLen-2], combineParameter);
		parentArray.splice(parArrLen-2, 2, combinedArr)
		recursiveCombine(parentArray, combineParameter);
	}
	return parentArray[0]
}

/* Example

var ar1 = [1,2,3],
ar2 = ['a','b','c'],
ar3 = ["x", "y", "z"],
ar4 = ["mani", "sabari", "fa"],
ar5 = ["3", "4", "5"],
parentArray = [ar1, ar2, ar3, ar4, ar5],
x = recursiveCombine(parentArray, "_|_");

console.log(x);

*/
