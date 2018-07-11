/**
 * binary search
 * Time complexity O(log n), space complexity	O(1)
 * @param {Array.<number>} arr - sorted array
 * @param {number} num - number to find
 * @param {number} start index
 * @param {number} end index
 * @return {number} - index of the found number of -1
 */
const binarySearch = (arr, num, start, end) => {
  
  while(start <= end){
    const middle = Math.floor((start + end)/2);

    const value = arr[middle];
    //console.log('start = ', start, 'end = ', end, 'middle = ', middle, 'value = ', value);
    
    if(value === num){
      return middle;
    }
    
    if(num < value){
      end = middle - 1;
    }
    else{
      start = middle + 1;
    }
  }
  
  return -1;
};

//TESTS............
const arr = [2, 5, 8, 9, 13, 45, 67, 99];
arr.forEach(item => {
  console.log(`The item ${item} is found at the index `, binarySearch(arr, item, 0, arr.length - 1));
});
