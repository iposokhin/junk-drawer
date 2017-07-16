/*
  * Algorithm is suitable for search in a sorted lists;
  * The execution time is O(log n);
*/
function binarySearch(list, element) {
    let down = 0, up = list.length - 1, middle, guess, result;
    while (down <= up) {
        middle = Math.floor((down + up) / 2);
        guess = list[middle];
        if (guess === element) {
            result = middle;
            return result;
        }
        else if (guess < element) {
            down = middle + 1;
        }
        else {
            up = middle - 1;
        }
    }
    return null;
}
