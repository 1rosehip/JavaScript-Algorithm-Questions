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
    this.length = 0;
  }
  
  /**
   * add some data to the linked list
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
    }
    else{
      let nextNode = this.head;
      while(nextNode.next){
        nextNode = nextNode.next;
      }
      
      nextNode.next = newNode;
    }
    
    this.length++;
    return newNode;
  }
  
  /**
   * add multiple number of items
   */
  addRange(...list){
    list.forEach(el => this.add(el));
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
  
  /**
   * merge 2 lists
   * @param {SinglyLinkedList} list1
   * @param {SinglyLinkedList} list2
   * @return {SinglyLinkedList} merged
   */
}

/**
 * You have two numbers represented by a linked list, where each node contains a sin- gle digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
 * O(n) time complexity and O(1) space complexity
 * @param {SinglyLinkedList} num1
 * @param {SinglyLinkedList} num2
 * @return {number} sum
 */
const sum = (num1, num2) => {
  
  return listToNumber(num1) + listToNumber(num2);
};

/**
 * convert singly-linked list to a number
 * @param {SinglyLinkedList} list
 * @return {number}
 */
const listToNumber = (list) => {
  
  let number = 0;
  let node = list.head;
  let counter = 0;
  
  while(node){
    
    number += Math.pow(10, counter) * node.data;
    
    counter++;
    node = node.next;
  }
  
  return number;
};
  
//TEST .......
const numbers = [
  [[1, 2], [3, 2]], //21 + 23 = 44
  [[5, 1], [6, 1]], //15 + 16 = 31
  [[8,1,1], [2, 3]], //118 + 32 = 150
  [[3,1,5], [5,9,2]] //515 + 295 = 808
];

numbers.forEach(row => {
  
  const ll = new SinglyLinkedList();
  ll.addRange(...row[0]);

  const l2 = new SinglyLinkedList();
  l2.addRange(...row[1]);

  console.log(ll.toString());
  console.log(l2.toString());
  console.log('Sum: ' + sum(ll,  l2).toString()); 
  console.log('---------------------------------------');
});
