/**
 * remove the duplicate characters in a string without using any additional buffer
 * @param {string} str
 * @return {string} formatted string
 * Time complexity is O(n)
 * Space complexity is O(1)
 */
const removeDuplicates = (str) => {
  
  let formatted = '';
  const aCharCode = 'a'.charCodeAt(0);
  
  let mask = 0;
  
  for(let i=0; i<str.length; i++){
    
    const charCode = str.charCodeAt(i);
    const charCodeDiff = charCode - aCharCode;
    const charMapped = 1 << charCodeDiff;
    
    if((mask & charMapped) === 0){
      formatted += str[i];
    }
    
    mask |= charMapped;
  }
  
  return formatted;
};

// TEST -------------
const values = ['ccvhhk', '', 'a', 'abc', 'aaa', 'efefef', 'abcdef'];

values.forEach((str, i) => {
  console.log(`${str}: `, removeDuplicates(str));
});
