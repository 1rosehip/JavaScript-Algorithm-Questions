
/**
 * rotate matrix by 90 deg
 * O(n^2) time complexity and O(n^2) space complexity
 * @param {Array.<Array.<number>>} matrix
 * return {Array.<Array.<number>>} rotated matrix
 */
const rotate90 = (matrix) => {
  
  const n = matrix.length;
  const rotated = [];
  
  for(let a=0; a<n; a++){   
    for(let b=0; b<n; b++){
      
      if(rotated[b] === undefined){
        rotated[b] = [];
      }
        
      rotated[b][n-a-1] = matrix[a][b];    
    }
  }
  
  return rotated;
};

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const res = rotate90(matrix1);

//print the result
res.forEach((el, i) => {
  console.log(el);
});
