function customFilter(array, callback) {

	var result = [];
		for (var i = 0; i < array.length; i++) {
			if (callback(array[i])) {
				result.push(array[i]);
			}
		}

return result;

}


function check(arr, fn, customFilter) {
	
var originArray = arr.filter(fn);
var testArray = customFilter(arr, fn);

	if (originArray.length !== testArray.length) {
		return false;
	}
		for (var i = 0; i < originArray.length; i++) {
			if (originArray[i] == testArray[i]) {
				return true;
			} else {
				return false;
			}	
		}

}

var arr_1 = [-5, -2, 0, 1, 2, 5, 9];
	var arr_2 = [0, 3, 4, 7, 12];
	var arr_3 = [1, 2, 3, 5, 9];
	fn_1 = (item) => item > 1;
	fn_2 = (item) => item < 5;
	fn_3 = (item) => item >= 3;

console.log(check(arr_1, fn_1, customFilter));
console.log(check(arr_2, fn_1, customFilter));
console.log(check(arr_3, fn_1, customFilter));
console.log(check(arr_1, fn_2, customFilter));
console.log(check(arr_2, fn_2, customFilter));
console.log(check(arr_3, fn_2, customFilter));
console.log(check(arr_1, fn_3, customFilter));
console.log(check(arr_2, fn_3, customFilter));
console.log(check(arr_3, fn_3, customFilter));