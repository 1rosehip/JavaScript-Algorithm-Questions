/*
 * javascript queue implementation using array
 */
class Queue{
  
  constructor(){
    this.buffer = [];
  }
  
  /**
   * adds an item beginning of the queue
   * time complexity O(1)
   * @param {*} item
   */
  add(item){
    this.buffer.unshift(item);
  }
  
  /**
   * removes the item from the end of the queue
   * time complexity O(1)
   * @return {*}
   */
  remove(){
    return this.buffer.pop();
  }
  
  /**
   * return the first item value
   * time complexity O(1)
   * @return {*|undefined}
   */
  first(){
    return this.buffer.length > 0 ? this.buffer[0] : undefined;
  }
  
  /**
   * return the last item value
   * time complexity O(1)
   * @return {*|undefined}
   */
  last(){
    return this.buffer.length > 0 ? this.buffer[this.buffer.length-1] : undefined;
  }
  
  /**
   * returns queue length
   * time complexity O(1)
   * @return {number}
   */
  size(){
    return this.buffer.length;
  }
  
  toString(){
    return this.buffer.toString();
  }
}

//TESTS............
const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);

console.log('The queue: ' + queue.toString());

//remove
queue.remove();
console.log('After remove: ' + queue.toString());

//info
console.log('first: ' + queue.first());
console.log('last: ' + queue.last());
console.log('size: ' + queue.size());
