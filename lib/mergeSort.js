import _ from 'lodash';

function merge(left, right) {
	var leftPointer = 0;
	var rightPointer = 0;
	var merged = [];

	while(leftPointer !== -1 || rightPointer !== -1) {
		if (rightPointer === -1 || (leftPointer !== -1 && left[leftPointer] <= right[rightPointer])) {
			merged.push(left[leftPointer]);
			leftPointer += 1;
		} else {
			merged.push(right[rightPointer]);
			rightPointer += 1;
		}

		// check array bound
		if (leftPointer >= left.length) {
			leftPointer = -1;
		}

		if (rightPointer >= right.length) {
			rightPointer = -1;
		}
	}

	return merged;
}

export default function mergeSort(array) {
	if (!_.isArray(array) || array.length === 0) {
		return [];
	}

	if (array.length === 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = _.slice(array, 0, middle);
	const right = _.slice(array, middle);
	const result = merge(mergeSort(left), mergeSort(right));

	return result;
}