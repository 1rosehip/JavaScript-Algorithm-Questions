/**
 * Given a text with length n and a pattern with length m, write a function that prints all occurrences of pattern and its permutations (or anagrams) in text
 * The worst case: O(n)
 * @param {string} text
 * @param {string} pattern
 * @return {Array.<object>} each object like { text: '...', index: number}
 */
const search = (text, pattern) => {
  
  const tlength = text.length;
  const plength = pattern.length;
  
  if(plength > tlength){
    
    //no results
    return [];
  }
  
  const ptemp = {};
  const ttemp = {};
  const res = [];
  
  let currentText = '';
  
  //count the number of letters in the pattern and in the text
  for(let i=0; i<plength; i++){
    
    //pattern
    let letter = pattern[i];
    let current = ptemp[letter];
    ptemp[letter] = (current === undefined) ? 1 : (current + 1);
    
    //text
    letter = text[i];
    current = ttemp[letter];
    ttemp[letter] = (current === undefined) ? 1 : (current + 1);
    
    currentText += letter;
  }
  
  if(isEqual(ptemp, ttemp)){
    res.push({
      text: currentText,
      index: 0
    });
  }
  
  //the main loop - the rest of the text
  for(let i=plength; i<tlength; i++){
      
    //remove the previous letter (i - plength)
    let letter = text[i - plength];
    if(letter !== undefined){
      ttemp[letter]--;
      if(ttemp[letter] <= 0){
        delete ttemp[letter];
      }
    }
    currentText = currentText.substring(1);
    
    //add the current letter
    letter = text[i];
    let current = ttemp[letter];
    ttemp[letter] = (current === undefined) ? 1 : (current + 1);
    currentText += letter;
    
    if(isEqual(ptemp, ttemp)){
      res.push({
        text: currentText,
        index: i - plength + 1
      });
    }
  }

  return res;
};

/**
  * check if 2 objects are equal (non deep equality)
  * @param {object} obj1
  * @param {object} obj2
  * @return {boolean}
  */
const isEqual = (obj1, obj2) => {
  
  const obj1num = Object.keys(obj1).length;
  const obj2num = Object.keys(obj2).length;
  
  if(obj1num !== obj2num) return false;
  
  return Object.keys(obj1).reduce((acc, item)=>{
	  return acc && (obj1[item] === obj2[item]);
  }, true);
};

//TEST.................
console.log(search('ifailuhafikqqafi', 'ifa'));
