/**
 * https://www.geeksforgeeks.org/searching-for-patterns-set-2-kmp-algorithm/
 *
 * Given a text txt with length N and a pattern with length M, write a function that prints all occurrences of pattern in the text. You may assume that N > M
 * @param {string} text
 * @param {string} pattern
 *
 * The worst case: O(m + n)
 */
const search = (text, pattern) => {
  
  console.log('Text: ' + text + ', Pattern: ' + pattern);
  
  const N = text.length;
  const M = pattern.length;
  
  // create lps[] that will hold the longest prefix / suffix values for pattern
  const lps = computeLPSArray(pattern);
  
  let i = 0; //text index
  let j = 0; //pattern index
  
  while(i < N){
    
    if(pattern[j] === text[i]){
      i++;
      j++;
    }
    
    if(j === M){
      console.log('Found pattern at index ' + (i - j));
      j = lps[j-1];
    }
    else{
      if(i < N && pattern[j] !== text[i]){
        //don't match lps[0..lps[j-1]] characters, they will match anyway
        if(j !== 0){
          j = lps[j-1];
        }
        else{
          i = i+1;
        }
      }
    }
  }
  
  console.log('--------------------------');
};

/**
 * compute arrays that contains longest proper prefixes that are also suffixes
 * Time complexity O(M) where M is the length of the pattern
 * @param {string} pattern
 * @return {Array.<number>} lps
 */
const computeLPSArray = (pattern) => {
  
  const M = pattern.length;
  const lps = [0]; //lps[0] is always 0
  
  //length of the previous longest prefix suffix
  let len = 0;
  let i = 1;
  
  //the loop calculates lps[i] for i in [1 to M-1]
  while (i < M){
    if (pattern[i] === pattern[len]){
      len++;
      lps[i] = len;
      i++;
    }
    else{
      if(len !== 0){
        len = lps[len - 1];
      }
      else{
        lps[i] = len;
        i++;
      }
    }
  }
  
  return lps;
};

//TEST LSP array computing.....
//console.log(computeLPSArray('AAACAAAA'));

//TEST.................
search('AABAACAADAABAAABAA', 'AABA');
search('ABABDABACDABABCABAB', 'ABABCABAB');
search('THIS IS A TEST TEXT', 'TEST');
