import _ from 'lodash';

export default function arrayAbs(array) {
	if (!_.isArray(array) || array.length === 1) {
		return 0;
	}

	var sum = 0;
	for (var i=1; i<array.length; i++) {
		sum += Math.abs(array[i] - array[i-1]);
	}

	return sum;
}
