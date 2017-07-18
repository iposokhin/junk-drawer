/*
  * A selection sort algorithm is slow and simple;
  * The execution time is O( n^2 );
*/
function findSmallest(arr) {
    var smallest = arr[0], index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
            index = i;
        }
    }
    return index;
}
function selectionSort(arr) {
    var resultArr = [];
    while (arr.length) {
        var smallest_index = findSmallest(arr);
        resultArr.push(arr.splice(smallest_index, 1)[0]);
    }
    return resultArr;
}
