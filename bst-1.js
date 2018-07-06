/*
 * javascript binary search tree implementation
 */
class BinarySearchTree{
  
  constructor(){
    this.root = null;
  }
  
  /**
   * inserts an item to the tree
   * time complexity ? and space complexity ?
   * @param {*} data
   * @return {object} node
   */
  insert(data){
    
    const newNode = {
      data: data,
      left: null,
      right: null,
      parent: null,
      count: 1
    };
    
    //in case of empty tree
    if(!this.root){
      this.root = newNode;
      return newNode;
    }
    
    const queue = [this.root];
    
    while(queue.length > 0){
      
      const saved = queue.pop();
      
      if(data < saved.data){
        
        if(!saved.left){
          
          saved.left = newNode;
          newNode.parent = saved;
          return newNode;
        }
        
        queue.unshift(saved.left);
      }
      
      if(data > saved.data){
        
        saved.count++;
        
        if(!saved.right){
          
          saved.right = newNode;
          newNode.parent = saved;
          return newNode;
        }
        
        queue.unshift(saved.right);
      }
      
      if(data == saved.data){
        
        if(saved.left){
          queue.unshift(saved.left);
        }
        
        if(saved.right){
          queue.unshift(saved.right);
        }
      }
      
    }
    
  }
  
  /**
   * find a node
   * Time complexity ? and space compexity ?
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

      if(temp.data < data){
         
          if(temp.right){
            queue.unshift(temp.right);
          }
          else{
            return null;
          }
      }
      else{
        if(temp.left){
          queue.unshift(temp.left);
        }
        else{
          return null;
        }
      }
    }
    
    return null;
  }
  
  /**
   * find a node with min value
   * @return {object}
   */
  finMinNode(root){
    
    if(root.left){
      return this.finMinNode(root.left);
    }
    
    return root;
  }
  
  /**
   * remove recursive helper
   * @param {object} nodeToDelete
   * @param {*} data to delete
   */
  removeHelper(nodeToDelete, data){
    
    //both children
    if(nodeToDelete.left && nodeToDelete.right){
        
        const minNode = this.finMinNode(nodeToDelete.right);
        nodeToDelete.data = minNode.data;
        this.removeHelper(nodeToDelete.right, minNode.data);
      return;
    }
    
    if(nodeToDelete.left){
      //only left child
      nodeToDelete.data = nodeToDelete.left.data;
      nodeToDelete.left = null;
      return;
    }

    if(nodeToDelete.right){

      //only right child
      nodeToDelete.data = nodeToDelete.right.data;
      nodeToDelete.right = null;
      return;
    }

    //no children
    nodeToDelete.parent = null;
  }
  
  /**
   * remove a node from the binary tree
   * @param {*} data
   */
  remove(data){
    
    let nodeToDelete = this.find(data);
    
    if(!nodeToDelete) return;
    
    this.removeHelper(nodeToDelete, data);
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
const btree = new BinarySearchTree();
btree.insert(20);
btree.insert(10);
btree.insert(30);
btree.insert(50);
btree.insert(40);
//console.log(JSON.stringify(btree, null, 4));

console.log('Binary search tree inorder traversal:');
btree.inorder(btree.root);

console.log('Binary search tree preorder traversal:');
btree.preorder(btree.root);

console.log('Binary search tree postorder traversal:');
btree.postorder(btree.root);

//test find method ------------
const values = [10, 20, 40, 50, 30, 100, -1, 0];
values.forEach(val => {
  console.log(`Find a ${val}: `, btree.find(val));
});

//test 'remove' method
btree.remove(50);
console.log('After removing 50: ');
btree.preorder(btree.root);

btree.remove(20);
console.log('After removing 20: ');
btree.preorder(btree.root);
