var fs = require ("fs"),
filename ="Data1.txt",
encode = "utf8";

 fs.readFile(filename,encode,function (err, file){
 	Ori_array = file.toString().split("\n");
 	Abs_Sum(Ori_array);
 	MergeSort(Ori_array);
 	

	function Abs_Sum (array){

		var abs_sum = 0;
		for (var i = 1 ; i < array.length; i++){
			var a = Math.abs(array[i]-array[i-1]);
			console.log(a);
			abs_sum = abs_sum + a;
 		}
 		console.log(sum);
 		return abs_sum;

	}
	

 	function MergeSort (array){
 		var MergeArray = array;
 		splitMerge(array,0,array.length,MergeArray);

 		function splitMerge(A_array,begin,end,B_array){
 			if ((begin-end) < 2){
 				return;
 			}
 			else{
 				var mid = (begin + end)/2;
 				splitMerge(A_array,begin,mid,B_array);
 				splitMerge(A_array,mid,end,B_array);
 				splitMerge(A_array,begin,mid,) 
 			}

 		}

 		function compareMerge(A_array,begin,mid,end,B_array){
 			var 
 		}

 	}

 
 });