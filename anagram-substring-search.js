/**
 * https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/
 *
 * Given a text with length n and a pattern with length m, write a function that prints all occurrences of pattern and its permutations (or anagrams) in text. You may assume that n > m.
 * @param {string} text
 * @param {string} pattern
 *
 * The worst case: O(n)
 */
const search = (text, pattern) => {
  
  console.log('Text: ' + text + ', Pattern: ' + pattern);
  
  const N = text.length;
  const M = pattern.length;
  
  //countP stores count of all characters of pattern
  const countP = new Array(256).fill(0);
  
  //countTW Stores count of current window of text
  const countTW = new Array(256).fill(0);
  
  for(let i=0; i<M; i++){
    
    const pCode = pattern[i].charCodeAt(0);
    const tCode = text[i].charCodeAt(0);
    
    countP[pCode]++;
    countTW[tCode]++;
  }
  
  //traverse through remaining characters of pattern
  for(let i=M; i<N; i++){
    
    //compare countP and countTW arrays
    if(isEqual(countP, countTW)){
      console.log('Found at Index ' + (i - M));
    }
    
    //add current character to current window
    tCode = text[i].charCodeAt(0);
    countTW[tCode]++;
    
    //remove the first character of previous window
    tCode = text[i-M].charCodeAt(0);
    countTW[tCode]--;
  }
  
  //check for the last window in text
  if(isEqual(countP, countTW)){
    console.log('Found at Index ' + (N - M));
  }
  console.log('--------------------------');
};

/**
 * return true if 2 arrays are equal
 * @param {Array.<number>} arr1
 * @param {Array.<number>} arr2
 * @return {boolean}
 */
const isEqual = (arr1, arr2) => {
  
  for(let i=0; i<256; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  } 
  
  return true;
};

//TEST.................
search('BACDGABCDA', 'ABCD');
