/*
 * javascript binary tree implementation
 */
class BinaryTree{
  
  constructor(){
    this.root = null;
  }
  
  /**
   * inserts an item to the tree in preorder (root, left, right)
   * time complexity O(n) and space complexity O(n)
   * @param {*} data
   * @return {object} node
   */
  insert(data){
    
    const newNode = {
      data: data,
      left: null,
      right: null
    };
    
    //in case of empty tree
    if(!this.root){
      this.root = newNode;
      return newNode;
    }
    
    const queue = [this.root];
    
    while(queue.length > 0){
      
      const saved = queue.pop();
      
      if(!saved.left){
        saved.left = newNode;
        return newNode;
      }
      else{
        queue.unshift(saved.left);
      }
      
      if(!saved.right){
        saved.right = newNode;
        return newNode;
      }
      else{
        queue.unshift(saved.right);
      }
    }
    
  }
  
  /**
   * find a node
   * Time complexity O(n) and space compexity O(n)
   * @param {*} data
   * @return {object|null} found node
   */
  find(data){
    
    if(!this.root) return null;
    
    const queue = [this.root];
    
    while(queue.length > 0){
      
      const temp = queue.pop();
      
      if(temp.data === data){
        return temp;
      }
      
      if(temp.left){
          queue.unshift(temp.left);
      }
      
      if(temp.right){
          queue.unshift(temp.right);
      }
    }
    
    return null;
  }
  
  /**
   * find a deepest node recursive helper
   * @param {object} root - subtree root
   * @param {object} params: max level and current deepest node
   * @param {number} level
   */
  findDeepestNodeHelper(root, params, level){
    if(root){
      
      if(root.left){
        this.findDeepestNodeHelper(root.left, params, level + 1);
      }
      
      if(level > params.maxLevel){
        params.maxLevel = level;
        params.deepestNode = root;
      }
      
      if(root.right){
        this.findDeepestNodeHelper(root.right, params, level + 1);
      }
    }
  }
  
  /**
   * find a deepest node of the binary tree
   * Time complexity O(n)
   * @return {object|null} deepest node
   */
  findDeepestNode(){
    
    if(!this.root) return null;
    
    const result = {
      maxLevel: -1,
      deepestNode: null
    };
    
    this.findDeepestNodeHelper(this.root, result, 0);
    
    return result;
  }
  
  /**
   * remove a node from the binary tree
   * @param {*} data
   */
  remove(data){
    
    // 1. find a node
    const found = this.find(data);
    
    if(found){
      
      // 2. find a the deepes and rightmost leaf
      let deepest = this.findDeepestNode();
      
      if(!deepest){
        
        //tree has only root
        this.root = null;
      }
      else{
        // 3. copy data from the leaf to the found node
        found.data = deepest.data;
        
        // 4. remove the leaf
        deepest = null;
      }
    }
  }
  
  /**
   * inorder traversal: left, root, right
   * @param {object} root - subtree root
   * time complexity O(n) and space complexity O(h) where h is the height of tree
   */
  inorder(root){
    
    if(root){
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }
  
  /**
   * preorder traversal: root, left, right
   * @param {object} root - subtree root
   * time complexity O(n) and space complexity O(h) where h is the height of tree
   */
  preorder(root){
    
    if(root){
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  
  /**
   * postorder traversal: left, right, root
   * @param {object} root - subtree root
   * time complexity O(n) and space complexity O(h) where h is the height of tree
   */
  postorder(root){
    
    if(root){
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.data);
    }
  }
}

//TESTS............


const btree = new BinaryTree();
btree.insert(10);
btree.insert(20);
btree.insert(30);
btree.insert(40);
btree.insert(50);
console.log(JSON.stringify(btree, null, 4));

console.log('Binary tree inorder traversal:');
btree.inorder(btree.root);

console.log('Binary tree preorder traversal:');
btree.preorder(btree.root);

console.log('Binary tree postorder traversal:');
btree.postorder(btree.root);

//test find method ------------
const values = [10, 20, 40, 50, 30, 100, -1, 0];
values.forEach(val => {
  console.log(`Find a ${val}: `, btree.find(val));
});


//test 'find deepest node' method
console.log('Find deepest node: ', btree.findDeepestNode());

//test 'remove' method
btree.remove(50);
console.log('After removing 50: ', JSON.stringify(btree, null, 4));

btree.remove(10);
console.log('After removing 10: ', JSON.stringify(btree, null, 4));
