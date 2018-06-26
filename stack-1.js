/**
 * javascript stack implementation using array
 */
class Stack{
  
  constructor(){
    this.buffer = [];
  }
  
  /**
   * adds an item to the end of the array
   * @param {*} item
   */
  push(item){
    this.buffer.push(item);
  }
  
  
  /**
   * removes the top item and returns it
   * @return {*}
   */
  pop(){
    return this.buffer.pop();
  }
  
  /**
   * peek or top -> returns top element without removing it
   * @return {*}
   */
  peek(){
    return this.buffer[this.buffer.length - 1];
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
