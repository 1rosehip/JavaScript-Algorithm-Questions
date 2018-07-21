/**
 * build Longest Common Prefix (LCP) array
 * https://www.youtube.com/watch?v=53VIWj8ksyI
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
		
		const index1 = suffixArr[i];
		const index2 = suffixArr[i+1];
		const item1 = text.substring(index1);
		const item2 = text.substring(index2);
		console.log(item1, item2);
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
  * create suffix array from the specified text
  * Time complexity O(n^2 Log n), space compexity O(n^2)
  * @param {string} text
  * @return {Array.<number>} suffix array
  */
const buildSuffixArray = (text) => {
    
  //the storagee is used to sort the suffixes alphabatically
  //and maintain their old indexes while sorting
  const storage = [];

  for(let i=0; i<text.length; i++){

    storage.push({
      index: i, 
      suffix: text.substring(i)
    });
  }
    
  //sort suffixes alphabatically
  storage.sort((item1, item2) => {
    if(item1.suffix === item2.suffix) return 0;
    return item1.suffix > item2.suffix ? 1 : -1;
  });
    
  //store indexes of all sorted suffixes in the suffix array
  const suffixArray = [];

  for(let i=0; i<storage.length; i++){
      suffixArray.push(storage[i].index);
  }
  
  return suffixArray;
};

const text = 'ABABBAB';
const suffixArr = buildSuffixArray(text); //[5, 0, 2, 6, 4, 1, 3]
console.log(suffixArr);
console.log(buildLCPArray(text, suffixArr)); //[undefined, 2, 2, 0, 1, 3, 1]
