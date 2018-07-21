/**
  * create suffix array from the specified text
  * Time complexity O(n^2 Log n), space compexity O(n^2)
  * @param {string} text
  * @param {number} firstItemLength
  * @return {Array.<number>} suffix array
  */
const buildSuffixArray = (text, firstItemLength) => {
    
  //the storagee is used to sort the suffixes alphabatically
  //and maintain their old indexes while sorting
  const storage = [];

  for(let i=0; i<text.length; i++){

	const item = text[i];
	
	if(item !== '$' && item !== '%'){
	
		storage.push({
		  index: i, 
		  suffix: text.substring(i),
		  type: (i < firstItemLength) ? 1 : 2
		});
    }
  }
    
  //sort suffixes alphabatically
  storage.sort((item1, item2) => {
    if(item1.suffix === item2.suffix) return 0;
    return item1.suffix > item2.suffix ? 1 : -1;
  });
    
  return storage;
};

/**
 * build Longest Common Prefix (LCP) array
 * https://www.youtube.com/watch?v=53VIWj8ksyI
 * https://www.youtube.com/watch?v=Ic80xQFWevc
 * @param {string} text
 * @param {Array.<number>} suffixArr of the text
 * @return {Array.<number>}
 */
const buildLCPArray = (text, suffixArr) => {

	if(!suffixArr && suffixArr.length === 0){
		return [];
	}
	
	const lcp = [undefined];
	
	for(let i=0; i<suffixArr.length-1; i++){
		
		const index1 = suffixArr[i].index;
		const index2 = suffixArr[i+1].index;
		const item1 = text.substring(index1);
		const item2 = text.substring(index2);
		
		const min = Math.min(item1.length, item2.length);
		
		let maxCommonPrefix = '';
		for(let j=0; j<min; j++){
			
			if(item1[j] === item2[j]){
				maxCommonPrefix += item1[j];
			}
			else{
				break;
			}	
		}
		
		lcp.push(maxCommonPrefix.length);
	}
	
	return lcp;
};

/**
 * find longest common substring
 * https://www.youtube.com/watch?v=Ic80xQFWevc
 * @param {string} text1
 * @param {string} text2
 * @return {string}
 */
const findLongestCommonSubstring = (text1, text2) => {
	
	//append unique characters to the texts;
	//the unique characters should be smaller than text characters;
	//then combine the texts
	const combined = text1 + '$' + text2 + '%';
	
	//find suffix array for the combined text
	const suffixArr = buildSuffixArray(combined, text1.length + 1);
	
	//build LCP array
	const lcp = buildLCPArray(combined, suffixArr);
	
	const slidingWindow = {
		type1num: 0,
		type2num: 0,
		start: 0,
		end: 0
	};
	
	let i = 0;
	const n = suffixArr.length;
	let maxSubstr = undefined;
	let maxSubstrItem = null;
	
	while(i < n){
	
		const item = suffixArr[i];
		
		//expand the sliding window till we have 2 colors .....
		if(item.type === 1){
			slidingWindow.type1num++;
		}
		
		if(item.type === 2){
			slidingWindow.type2num++;
		}
		
		if(slidingWindow.type1num !== 0 && slidingWindow.type2num !== 0){
			slidingWindow.end = i;
			
			//check if it's needed to shrink the sliding window
			for(let j=slidingWindow.start; j<slidingWindow.end; j++){
				
				const el = suffixArr[j];
				
				if(slidingWindow.type1num <= 1 && slidingWindow.type2num <= 1){
					break;
				}
				
				if(el.type === 1 && slidingWindow.type1num > 1){
					slidingWindow.start++;
					slidingWindow.type1num--;
				}
				
				if(el.type === 2 && slidingWindow.type2num > 1){
					slidingWindow.start++;
					slidingWindow.type2num--;
				}
			}
			
			//find the longest common substring for the given sliding window
			let minLCPVal = undefined;
			let minSBSItem = null;
			
			for(let k=slidingWindow.start + 1; k<=slidingWindow.end; k++){
				
				const val = lcp[k];
				
				if(minLCPVal === undefined){
					minLCPVal = val;
					minSBSItem = suffixArr[k];
				}
				else{
					if(val < minLCPVal){
						minLCPVal = val;
						minSBSItem = suffixArr[k];
					}
				}
			}
			
			if(maxSubstr === undefined){
				maxSubstr = minLCPVal;
				maxSubstrItem = minSBSItem;
			}
			else{
				if(minLCPVal > maxSubstr){
					maxSubstr = minLCPVal;
					maxSubstrItem = minSBSItem;
				}
			}
		}
		i++;
	}
	
	return maxSubstrItem.suffix.substring(0, maxSubstr);
};

//TEST.................
console.log(findLongestCommonSubstring('zxabcdezy', 'yzabcdezx')); //abcdez
console.log(findLongestCommonSubstring('GeeksforGeeks', 'GeeksQuiz')); //Geeks
console.log(findLongestCommonSubstring('abcdaf', 'zbcdf')); //bcd
