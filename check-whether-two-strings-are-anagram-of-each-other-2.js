/**
 * check if two strings are anagrams or not
 * @param {string} str1
 * @param {string} str2
 * @return {boolean} 
 * Time complexity is O(n)
 * Space complexity is O(n)
 */
const checkIfAnagram = (str1, str2) => {
  
  if(str1.length !== str2.length) return false;
  
  const cache1 = buildCache(str1);
  const cache2 = buildCache(str2);
  
  for(let key in cache1){
    if(cache1[key] !== cache2[key]) return false;
  }
  
  return true;
};

/**
 * @param {string} str
 * @return {object}
 */
const buildCache = (str) => {
  
  const cache = {};
  
  str.split('').forEach((el, i) => {
    
    if(cache[el] === undefined){
      cache[el] = 1;
    }
    else{
      cache[el]++;
    }
  });
  
  return cache;
};

// TEST -------------
console.log('ab / cd should be false: ', checkIfAnagram('ab', 'cd'));

console.log('snow / wons should be true: ', checkIfAnagram('snow', 'wons'));

console.log('here / there should be false: ', checkIfAnagram('here', 'there'));

console.log('morning / romning should be true: ', checkIfAnagram('morning', 'romning'));

console.log('aaaaab / ab should be false: ', checkIfAnagram('aaaaab', 'ab'));

console.log('aaab / baaa should be true: ', checkIfAnagram('baaa', 'baaa'));

console.log('aabb / baaa should be false: ', checkIfAnagram('aabb', 'baaa'));
