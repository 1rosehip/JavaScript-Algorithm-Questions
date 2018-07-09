/**
  * create suffix array from the specified text
  * Time complexity O(n log n), Space compexity O(n)
  * @param {string} text
  * @return {Array.<number>} suffix array
  */
const BuildSuffixArray = (text) => {
    
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

//TESTS............
const sarr1 = BuildSuffixArray('banana');
console.log(sarr1); //5 3 1 0 4 2
