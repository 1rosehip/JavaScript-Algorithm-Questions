/**
Javascript doubly-linked list implementation
*/
class DoublyLinkedList{
  
  /**
   * constructor
   */
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  /**
   * add some data to the linked list
   * time complexity O(1)
   * @param {*} data
   * @return {objected} created node
   */
  add(data){
    
    const newNode = {
      data: data,
      next: null,
      prev: null
    };
    
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    
    this.length++;
    return newNode;
  }
  
  /**
   * print the linked list
   * @return {string}
   */
  toString(){
   
    if(!this.head){
      return "[]";
    }
    
    let res = "";
    
    let nextNode = this.head;
    while(nextNode){
      res += ' <-> ' + nextNode.data;
      nextNode = nextNode.next;
    }
    
    return res ? `[head${res}]` : '[]';
  }
  
  /**
   * returns the node at the specified position in this list
   * time complexity O(n)
   * @param {number} position
   * @return {object} found node
   */
  get(position){
    
    let found = null;
    let node = this.head;
    let index = 0;
    
    if(position < 0 || position > this.length || !this.head) return null;
    
    do{
      if(index === position){
        return node;
      }
      
      node = node.next;
      index++;
    } while(node)
    
    return found;
  }
  
  /**
   * remove and return the last item
   * time complexity O(1)
   * @return {*}
   */
  pop(){
    if(!this.head) return null;
    
    const removedNode = this.tail;
    
    if(this.head === this.tail){
      this.head = null;
      this.tail = 0;
    }
    else{
      const prevNode = this.tail.prev;
      prevNode.next = null;
    }
    
    this.length--;
    return removedNode;
  }
}

/**
 * javascript stack implementation using singly-linked list
 */
class Stack{
  
  constructor(){
    this.buffer = new DoublyLinkedList();
  }
  
  /**
   * adds an item to the end of the stack
   * time complexity O(1)
   * @param {*} item
   */
  push(item){
    this.buffer.add(item);
  }
  
  /**
   * removes the top item and returns it
   * time complexity O(1)
   * @return {*}
   */
  pop(){
    return this.buffer.pop();
  }
  
  /**
   * peek or top -> returns top element without removing it
   * time complexity O(1)
   * @return {*}
   */
  peek(){
    return this.buffer.tail.data;
  }
  
  /**
   * checks whether the stack is empty
   * @return {boolean}
   */
  isEmpty(){
    return this.buffer.length === 0;
  }
  
  toString(){
    return this.buffer.toString();
  }
}

//TESTS............
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log('The stack: ' + stack.toString());

//push
stack.push(6);
console.log('push 6: ' + stack.toString());

//pop
stack.pop();
console.log('pop 6: ' +stack.toString());

//peek
console.log('peek: ' +stack.peek());
console.log(stack.toString());

//is empty?
console.log('is empty?: ' +stack.peek());
console.log('is empty? ' + stack.isEmpty());
