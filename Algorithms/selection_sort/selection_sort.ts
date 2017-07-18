/*
  * A selection sort algorithm is slow and simple;
  * The execution time is O( n^2 );
*/

function findSmallest( arr: Array<number> ): number {
  let smallest: number = arr[ 0 ],
      index: number = 0;

  for ( let i: number = 0; i < arr.length; i++ ) {
    if ( smallest > arr[ i ] ) {
      smallest = arr[ i ];
      index = i;
    }
  }

  return index;   
}

function selectionSort( arr: Array<number> ): Array<number> {
  let resultArr: Array<number> = [];

  while( arr.length) {
    let smallest_index: number = findSmallest( arr );
    resultArr.push( arr.splice( smallest_index, 1 )[0] );
  }

  return resultArr;
}