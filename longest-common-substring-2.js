
/**
 * find longest common substring
 * https://www.youtube.com/watch?v=BysNXJHzCEs
 * @param {string} text1
 * @param {string} text2
 * @return {string}
 */
const findLongestCommonSubstring = (text1, text2) => {
  
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
        //arr[col][row] = Math.max(arr[col-1][row], arr[col][row-1]);
        arr[col][row] = 0;
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
  
  let sbs = '';
  while(maxCol > 0 && maxRow > 0){
  	
  	const val = text1[maxCol-1];
  
  	if(arr[maxCol][maxRow] === 0) break;
  
  	sbs = val + sbs;
  	maxCol--;
  	maxRow--;
  }
  
  return sbs;
};


//TEST.................
console.log(findLongestCommonSubstring('zxabcdezy', 'yzabcdezx')); //abcdez
console.log(findLongestCommonSubstring('GeeksforGeeks', 'GeeksQuiz')); //Geeks
console.log(findLongestCommonSubstring('abcdaf', 'zbcdf')); //bcd
