
/**
 * rotate matrix by 90 deg
 * @param {Array.<Array.<number>>} matrix
 * return {Array.<Array.<number>>} rotated matrix
 */
const rotate90 = (matrix) => {
  
  const n = matrix.length;
  
  //transpose -------
  for(let a=0; a<n; a++){
   
    for(let b=a; b<n-a-1; b++){
      
      const lefttop = matrix[a][b];    
      const righttop = matrix[b][n-a-1];
      const rightbottom = matrix[n-a-1][n-b-1];
      const leftbottom = matrix[n-b-1][a];
    
      matrix[a][b] = leftbottom;
      matrix[n-b-1][a] = rightbottom;
      matrix[n-a-1][n-b-1] = righttop;
      matrix[b][n-a-1] = lefttop;
      
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
