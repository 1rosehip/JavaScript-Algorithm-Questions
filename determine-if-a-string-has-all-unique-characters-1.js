/**
 * determine if a string has all unique characters
 * @param {string} str
 * @return {boolean}
 * Time complexity is O(n)
 * Space complexity is O(n)
 * https://codepen.io/1rosehip/pen/KeyNYV
 */
const checkiIfAllUnique = (str) => {
  
  const hash = {};
  
  for(let i=0; i<str.length; i++){
    
    const char = str[i];
    if(hash[char] === 1){
      return false;
    }
    
    hash[char] = 1;
  }
  
  return true;
  
};

// TEST -------------
const values = ['', 'a', 'abc', 'aaa', 'efefef', 'abcdef'];

values.forEach((str, i) => {
  console.log(`${str}: `, checkiIfAllUnique(str));
});
