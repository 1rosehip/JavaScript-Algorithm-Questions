/**
 * convert array to binary number
 * @param {Array.<number>} arr
 * @return {number} binary number
 */
const arrayToBin = (arr) => {
  
  return arr.reduce((acc, el, i, arr) => {
   
    if(el !== 0){
      const shift = 1 << (arr.length - i - 1);
      return acc | shift;
    }
    else{
      return acc;
    }
  }, 0);
};

/**
 * get max binary number for the given digits number
 * for example, for 1111 => 15
 * @param {number} digitsNum
 * @return {number}
 */ 
const getMaxBinNumPerWidth = (digitsNum) => {
  
  let sum = 0;
  
  for(let i=0; i<digitsNum; i++){
    sum += Math.pow(2, i);  
  }
  
  return sum;
};

/**
 * if an element in an MxN matrix is 0, its entire row and column is set to 0
 * O(mxn) time complexity and O(1) space complexity 
 * @param {Array.<Array.<number>>} matrix
 * @return {Array.<Array.<number>>} updated matrix
 */
const updateMatrix = (matrix) => {
  
  if(matrix.length === 0 || matrix[0].length === 0){
    return matrix;
  }
  
  const h = matrix.length;
  const w = matrix[0].length;
  
  const max = getMaxBinNumPerWidth(w);
  let mask = max;
  
  for(let a=0; a<h; a++){ 
    
    const rowNum = arrayToBin(matrix[a]);
    mask &= rowNum;
    
    if(rowNum !== max){
      for(let b=0; b<w; b++){
          matrix[a][b] = 0;
      }
    }
  }
  
  for(let a=0; a<h; a++){ 
      
      for(let b=0; b<w; b++){
        
        const checker = 1 << w - b - 1;
        
        matrix[a][b] = ((mask & checker) === 0) ? 0 : matrix[a][b];
        
      }
    }
  
  return matrix;
};

//TEST 1
const matrix1 = [
  [1, 0, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 11, 12],
  [13, 14, 15, 1]
];
const res1 = updateMatrix(matrix1);
res1.forEach((el, i) => {
  console.log(el);
});
console.log('---------------');

//TEST 2
const matrix2 = [
  [0, 1, 4, 1],
  [1, 1, 5, 1],
  [1, 8, 1, 0]
];
const res2 = updateMatrix(matrix2);
res2.forEach((el, i) => {
  console.log(el);
});
