//Based on the following gist: https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0

/**
 * trie node
 */
class TrieNode{
  
  /**
   * constructor
   * @param {char|null} value
   * @paran {TrieNode|null} parent
   */
  constructor(value, parent){
    this.value = value;
    this.parent = parent;
    this.children = {};
    this.isEndNode = false;
  }
  
  /**
   * iterates through the parents 
   * to get the word
   * time complexity: O(k), k = word length
   * @return {string}
   */
  getWord(){
    
    const word = [];
    let node = this;
    
    while(node){
      word.unshift(node.value);
      node = node.parent;
    }
    
    return word.join('');
  }
}

/*
 * trie implementation
 */
class Trie{
  
  constructor(){
    this.root = new TrieNode(null, null);
  }
  
  /**
   * insert a word into the trie
   * time complexity: O(k), k = word length
   * @param {string} word
   */
  insert(word){
    let node = this.root;
    
    for(let i=0; i<word.length; i++){
      
      const ch = word[i];
      
      //if this character is not a child of the node -> create it
      if(node.children[ch] === undefined){
        node.children[ch] = new TrieNode(ch, node);
      }
      
      //proceed to the next level
      node = node.children[ch];
      
      node.isEndNode = i === word.length - 1;
    }
  }
  
  /**
   * check if trie contains a whole word
   * time complexity: O(k), k = word length
   * @param {string} word
   * @return {boolean}
   */
  contains(word){
   
    let node = this.root;
    
    for(let i=0; i<word.length; i++){
      
      const ch = word[i];
      
      if (node.children[ch] !== undefined){
        node = node.children[ch];
      }
      else return false;
    }
    
    //we finished going through all the words, but is it a whole word?
    return node.isEndNode;
  }
  
  /**
   * find every word with the given prefix
   * time complexity: O(p + n), p = prefix length, n = number of child paths
   * @param {string} prefix
   * @return {Array.<string>}
   */
  find(prefix){
    
    let node = this.root;
    const words = [];
    
    for(let i=0; i<prefix.length; i++){
      const ch = prefix[i];
      
      if(node.children[ch] !== undefined){
        node = node.children[ch];
      }
      else return words;
    }
    
    this.findAllWords(node, words);
    
    return words;
  }
  
  /**
   * recursively find all words in the given node
   * @param {TrieNode} node
   * @param {Array.<string>} words
   * @return {Array.<string>} words
   */
  findAllWords(node, words){
    
    if(node.isEndNode){
      words.unshift(node.getWord());
    }
    
    for(let child in node.children){
      this.findAllWords(node.children[child], words);
    }
  }
}

//TESTS............
const trie = new Trie();
trie.insert('hello');
trie.insert('helium');
//console.log(JSON.stringify(trie, null, 4));


// check contains method
console.log('contains helium: ', trie.contains('helium')); 
console.log('contains abc: ', trie.contains('abc')); 

// check find method
console.log('find hel: ', trie.find('hel'));  // ['helium', 'hello']
console.log('find hell: ', trie.find('hell'));  // ['hello']
