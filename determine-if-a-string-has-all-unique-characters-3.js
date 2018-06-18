/**
 * determine if a string has all unique characters
 * @param {string} str
 * @return {boolean}
 * Time complexity is O(n log n)
 * Space complexity is O(1)
 */
const checkiIfAllUnique = (str) => {
  
  if(str.length < 2) return true;
  
  const arr = str.split('');
  arr.sort((a, b) => {
    return a > b;
  });
  
  for(let i=0; i<arr.length - 1; i++){
    
    if(arr[i] === arr[i+1]) return false;
  }
  
  return true;
};

// TEST -------------
const values = ['', 'a', 'abc', 'aaa', 'efefef', 'fecbda', '##4252!!!', '#425!'];

values.forEach((str, i) => {
  console.log(`${str}: `, checkiIfAllUnique(str));
});
