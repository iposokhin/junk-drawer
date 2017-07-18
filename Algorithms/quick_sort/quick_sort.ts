/*
  * A quick sort algorithm is fast and recursive;
  * It apply an approach 'Divide and conquer';
  * The execution time is O( n*log(n) );
*/

function quickSort( arr: Array<number> ): Array<number> {

  if ( arr.length < 2 ) {
    return arr;
  } else {
    let pivot: number = arr.splice( Math.floor( Math.random() * ( arr.length - 0 ) + 0 ), 1 )[ 0 ];

    let less: Array<number> = [],
        greater: Array<number> = [];

    for( let i: number = 0; i < arr.length; i++ ) {
      if ( arr[ i ] <= pivot ) {
        less.push( arr[ i ] ) 
      } else {
        greater.push( arr[ i ] );
      }
    }

    return [].concat( quickSort( less ), pivot, quickSort( greater ) );
    }
}