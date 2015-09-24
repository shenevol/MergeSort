import fs from 'fs';
import arrayAbs from './arrayAbs';
import mergeSort from './mergeSort'; 

const ENCODING = 'utf-8';

export default function compareAbs(fileName) {
	fs.readFile(fileName, ENCODING, (err, file) => {
		console.log(`comparing '${fileName}' ...`);

		const numbers = file.toString().split('\n').filter(val => {
			return !!val;
		}).map(val => {
			return parseInt(val, 10);
		});
		const A = arrayAbs(numbers);
		const startTime = Date.now();
		const sortedNumbers = mergeSort(numbers);
		const endTime = Date.now();
		const B = arrayAbs(sortedNumbers);

		console.log(`${(endTime-startTime)/1000} sec`)
		console.log(`${A} ${B} ${A-B}\n`);
	});
}
