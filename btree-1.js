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
      
      const saved = queue[queue.length - 1];
      
      queue.pop();
      
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
