/**
 * check if two strings are anagrams or not
 * @param {string} str1
 * @param {string} str2
 * @return {boolean} 
 * Time complexity is O(n)
 * Space complexity is O(1)
 */
const checkIfAnagram = (str1, str2) => {
  
  const sorted1 = str1.split('').sort((a,b) => a > b).join('');
  const sorted2 = str2.split('').sort((a,b) => a > b).join('');
  
  return sorted1 === sorted2;
};

// TEST -------------
console.log('ab / cd should be false: ', checkIfAnagram('ab', 'cd'));

console.log('snow / wons should be true: ', checkIfAnagram('snow', 'wons'));

console.log('here / there should be false: ', checkIfAnagram('here', 'there'));

console.log('morning / romning should be true: ', checkIfAnagram('morning', 'romning'));

console.log('aaaaab / ab should be false: ', checkIfAnagram('aaaaab', 'ab'));

console.log('aaab / baaa should be true: ', checkIfAnagram('baaa', 'baaa'));

console.log('aabb / baaa should be false: ', checkIfAnagram('aabb', 'baaa'));
