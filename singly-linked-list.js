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
}
  
//TEST --------------
const ll1 = new SinglyLinkedList();
ll1.add(1);
ll1.add(2);
ll1.add(3);
ll1.add(4);
ll1.add(5);
ll1.add(6);
console.log(ll1.toString());

//get elements tests
const positions = [-1, 0, 1, 2, 3, 4, 5, 6];

positions.forEach((pos, i) => {
  const el = ll1.get(pos);
  console.log(`The element at position ${pos}: ` + (el ? el.data : 'not found'));
});

//remove tests
const toRemove = [3, 0, 1, 0, 0];

toRemove.forEach((el, i) => {
  let removed = ll1.remove(el);
  console.log('Removed: ' + removed.data + ', ' + ll1.toString());
});
