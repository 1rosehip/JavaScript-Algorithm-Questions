
/**
 * rotate matrix by 90 deg
 * @param {Array.<Array.<number>>} matrix
 * return {Array.<Array.<number>>} rotated matrix
 */
const rotate90 = (matrix) => {
  
  const n = matrix.length;
  
  //transpose -------
  for(let a=0; a<n; a++){
    
    for(let b=a+1; b<n; b++){
      
      const saved = matrix[a][b];
      matrix[a][b] = matrix[b][a];
      matrix[b][a] = saved;
    }
  }
  
  //flip --------
  for(let a=0; a<n; a++){
    
    for(let b=0; b<n/2; b++){
      
      const saved = matrix[a][b];
      matrix[a][b] = matrix[a][n-b-1];
      matrix[a][n-b-1] = saved;
    }
  }
  
  return matrix;
};

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const res = rotate90(matrix1);

console.log('--------------------');
res.forEach((el, i) => {
  console.log(el);
});
