/**
 * https://www.geeksforgeeks.org/searching-for-patterns-set-1-naive-pattern-searching/
 *
 * Given a text txt with length N and a pattern with length M, write a function that prints all occurrences of pattern in the text. You may assume that N > M
 * @param {string} text
 * @param {string} pattern
 *
 * The best case occurs when the first character of the pattern is not present in text at all: O(n).
 * The worst case: O(m*(n-m+1)) = O(mn)
 */
const search = (text, pattern) => {
  
  console.log('Text: ' + text + ', Pattern: ' + pattern);
  const M = pattern.length;
  const N = text.length;
  
  // a loop to slide pat one by one
  for (let i = 0; i <= N - M; i++){
    
    let j = 0;
    //for current index i, check for pattern match
    for (j = 0; j < M; j++){
      
      if (text.charAt(i + j) !== pattern.charAt(j)){
         break;
      }
    }
    
    if (j === M){
      console.log('Pattern found at index ' + i);
    }
    
  }
  
  console.log('--------------------------');
};

//TEST.................
search('AABAACAADAABAAABAA', 'AABA');
