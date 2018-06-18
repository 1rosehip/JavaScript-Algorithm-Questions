/**
 * determine if a string has all unique characters
 * @param {string} str
 * @return {boolean}
 * Time complexity is O(n)
 * Space complexity is O(1)
 */
const checkiIfAllUnique = (str) => {

  /*
  Each letter 'a', 'b', 'c', ... is mapped to the unsigned int 0, 1, 2, ... by the expression char - 'a'.
  Each number 0, 1, 2, 3, 4... is mapped to 1, 10, 100, 1000, 10000, ... by the expression 1 << (char - 'a').
  The checker is a 32bit binary number 0000....000.
  For every letter (for example 'c') we take its mapped value (for example 100) and set 1 in the appropriate position of the checker number (00000000000000000000000000000100)
  For every other letter the expression (checker & mapped_value = 0)
  If the letter is not unique, the expression (checker & mapped_value != 0)
  */
  
  const hash = {};
  const aCharCode = 'a'.charCodeAt(0);
  let checker = 0;
  
  for(let i=0; i<str.length; i++){
    
    const charCode = str.charCodeAt(i);
    const val = charCode - aCharCode;
    const shift = 1 << val;
    const and = checker & shift;
    
    //console.log(str[i], charCode, 'val: ' + val, 'shift: ' + shift.toString(2), 'checker: ' + checker.toString(2), and);
    
    if(and > 0){
      return false;
    }
   
    checker = checker | shift;
   
  }
  
  return true;
  
};

// TEST -------------
const values = ['', 'a', 'abc', 'aaa', 'efefef', 'abcdef'];

values.forEach((str, i) => {
  console.log(`${str}: `, checkiIfAllUnique(str));
});
