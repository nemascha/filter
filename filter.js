function filter(array, callback) {

	var result = [];
		for (var i = 0; i < array.length; i++) {
			if (callback(array[i])) {
				result.push(array[i]);
			}
		}

return result;

}
