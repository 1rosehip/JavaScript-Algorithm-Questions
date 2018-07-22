
/**
 * find longest common subsequence
 * https://www.youtube.com/watch?v=BysNXJHzCEs
 * @param {string} text1
 * @param {string} text2
 * @return {string}
 */
const findLongestCommonSubsequence = (text1, text2) => {
  
  const n = text1.length;
  const m = text2.length;
	
  //create 2d array n x m
  const arr = new Array(n+1).fill().map(() => {
		return new Array(m+1).fill(0);
  });
  
  for(let col=1; col<n+1; col++){
    for(let row=1; row<m+1; row++){
      
      const item1 = text1[col-1];
      const item2 = text2[row-1];
      
      if(item1 === item2){
        //1 + diagonally item value
        arr[col][row] = 1 + arr[col-1][row-1];
      }
      else{
        arr[col][row] = Math.max(arr[col-1][row], arr[col][row-1]);
      }
    }
  }
  
  let max = undefined; //length of the longest common substring
  let maxCol = undefined;
  let maxRow = undefined;
  
  //find max item
  for(let col=1; col<n+1; col++){
    for(let row=1; row<m+1; row++){
      
      const item = arr[col][row];
      
      if(max === undefined || item > max){
      	max = item;
      	maxCol = col;
      	maxRow = row;
      }
    }
  }
  console.log(arr);
  let sbs = '';
  while(maxCol > 0 && maxRow > 0){
  	
    const item1 = text1[maxCol-1];
    const item2 = text2[maxRow-1];
      
    if(item1 === item2){
      
      const val = text1[maxCol-1];
      sbs = val + sbs;
      maxCol--;
  	  maxRow--;
    }
    else{
      if(arr[maxCol-1][maxRow] > arr[maxCol][maxRow-1]){
        maxCol--;
      }
      else{
        maxRow--;
      }
    }
  }
  
  return sbs;
};


//TEST.................
console.log(findLongestCommonSubsequence('HARRY', 'SALLY')); //AY
console.log(findLongestCommonSubsequence('AA', 'BB')); //''
console.log(findLongestCommonSubsequence('SHINCHAN', 'NOHARAAA')); //NHA
console.log(findLongestCommonSubsequence('ABCDEF', 'FBDAMN')); //BD
console.log(findLongestCommonSubsequence('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC')); //DGCGTEXZWRYJJBV

