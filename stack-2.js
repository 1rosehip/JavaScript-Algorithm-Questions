/**
Javascript singly-linked list implementation
{
	"data": 1,
	"next": {
		"data": 2,
		"next": {
			"data": 3,
			"next": null
		}
	}
}
*/
class SinglyLinkedList{
  
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
      next: null
    };
    
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
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
      res += '-> ' + nextNode.data;
      nextNode = nextNode.next;
    }
    
    return res ? `[head ${res}]` : '[]';
  }
  
  /**
   * returns the node at the specified position in this list
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
   * removes the element at the specified position in this list
   * time complexity O(n)
   * @param {number} position
   * return {object} removed element
   */
  remove(position){
    
    if(position < 0 || position > this.length || !this.head) return null;
   
   let nodeToRemove =  null; 
    
   if(position === 0){
     nodeToRemove = this.head;
     this.head = nodeToRemove.next;
   }
   else{
     const prevNode = this.get(position - 1);
     nodeToRemove = prevNode.next;
     prevNode.next = nodeToRemove.next;
   }
    
   this.length--;
   return nodeToRemove;
  }
  
}

/**
 * javascript stack implementation using singly-linked list
 */
class Stack{
  
  constructor(){
    this.buffer = new SinglyLinkedList();
  }
  
  /**
   * adds an item to the end of the stack
   * @param {*} item
   */
  push(item){
    this.buffer.add(item);
  }
  
  /**
   * removes the top item and returns it
   * @return {*}
   */
  pop(){
    return this.buffer.remove(this.buffer.length - 1);
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
