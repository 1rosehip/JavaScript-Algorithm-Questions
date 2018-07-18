/**
 * Find the smallest window in a string containing all characters of another string
 * @param {string} text
 * @param {string} pattern
 * @return {string} smallest substring that contains all characters from the specified pattern
 */
const findSmallestSubstring = (text, pattern) => {
	
	//occurrences of pattern letters
	const ptemp = getOccurrences(0, pattern.length, pattern);
	
	//get first substring length
	let sbsLength = getNextSubstringLength(text, ptemp);
	
	//get occurrences of the first substring
	const sbstemp = getOccurrences(0, sbsLength, text);
	
	//remove unused characters at the beginning of the first substring
	let start = skip(0, sbsLength, text, ptemp, sbstemp).start;
	
	sbsLength = sbsLength - start;
	
	let min = text.substring(start, start + sbsLength);
	
	while(start < text.length){
		
		const letter = text[start];
		
		//find next letter in the text; sbstemp is also updated;
		const nextNum = findNextLetter(letter, start + sbsLength, text, ptemp, sbstemp);
		
		if(nextNum === -1) break;
		
		sbsLength += nextNum;
		
		//remove unused characters at the beginning of the first substring
		const skipres = skip(start, sbsLength, text, ptemp, sbstemp);
		
		start = skipres.start;
		
		sbsLength = sbsLength - skipres.removed;
		
		if(sbsLength < min.length){
			min = text.substring(start, start + sbsLength);
		}
		
	}
	
	return min;
};


/**
 * try to skip letters on the left
 * @param {number} start
 * @param {number} length (excluding)
 * @param {string} text
 * @param {object} ptemp
 * @param {object} temp
 * @return {number} updated start
 */
const skip = (start, length, text, ptemp, temp) => {
	
	let removed = 0;
	
	for(let i=start; i<start + length; i++){
	
		const templetter = text[i];
		
		if(ptemp[templetter] === undefined){
			removed++;
			start++;
		}
		else{
			if(temp[templetter] > ptemp[templetter]){
				start++;
				removed++;
				temp[templetter] = (temp[templetter] - 1) <= 0 ? undefined : temp[templetter] - 1;
				
			}
			else{
				break;
			}
		}
	}
	
	return {
		start: start,
		removed: removed
	};
};

/**
 * get number of letter occurrences
 * @param {number} start
 * @param {number} end (not including)
 * @param {string} text
 * @return {object}
 */
const getOccurrences = (start, end, text) => {

	const temp = {};
	
	for(let i=start; i<end; i++){
	
		const letter = text[i];
		temp[letter] = (temp[letter] === undefined) ? 1 : temp[letter] + 1;
	}
	
	return temp;
};

/**
 * get next substring length
 * @param {string} text
 * @param {object} ptemp
 * @return {number} the length of the next substring
 */
const getNextSubstringLength = (text, ptemp) => {

	const temp = {};
	let index = 0;
	
	while(index < text.length){
	
		const letter = text[index];
		const letterInPatternNum = ptemp[letter];
		
		index++;
		
		if(letterInPatternNum !== undefined){
			temp[letter] = (temp[letter] === undefined) ? 1 : temp[letter] + 1;
			
		}
		
		//in case of match...
		if(isEqualOrGreater(temp, ptemp)) break;
	}
	
	return index;
};

/**
 * find the number of characters till the next letter
 * @param {string} letter
 * @param {number} start index to search
 * @param {string} text
 * @return {number} the characters number till next letter or -1
 */
const findNextLetter = (letter, start, text, ptemp, temp) => {

	let count = 0;
	
	for(let i=start; i<text.length; i++){
	
		const templetter = text[i];
		count++;
		
		if(ptemp[templetter] !== undefined){
			temp[templetter] = temp[templetter] + 1;
		}
			
		if(templetter === letter){
			return count;
		}
	}
	
	return -1;
};

/**
  * check if each key of the first object >= appropriate key of the second object
  * @param {object} obj1
  * @param {object} obj2
  * @return {boolean}
  */
const isEqualOrGreater = (obj1, obj2) => {
  
  const obj1num = Object.keys(obj1).length;
  const obj2num = Object.keys(obj2).length;
  
  if(obj1num !== obj2num) return false;
  
  return Object.keys(obj1).reduce((acc, item)=>{
	  return acc && (obj1[item] >= obj2[item]);
  }, true);
};
 
//TEST.................
console.log(findSmallestSubstring('this is a test string', 'tist')); //t stri
console.log(findSmallestSubstring('oh, this is a test string', 'tist')); //t stri
console.log(findSmallestSubstring('geeksforgeeks', 'ork')); //ksfor
console.log(findSmallestSubstring('addbecodebanc', 'abc')); //banc
