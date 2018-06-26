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
  merge(list1, list2){
   
    const merged = new SinglyLinkedList();
    
    while(list1.length > 0 && list2.length > 0){
      
      if(list1.head.data <= list2.head.data){
        merged.add(list1.remove(0).data);
      }
      else{
        merged.add(list2.remove(0).data);
      }
    }
    
    while(list1.length > 0){
      merged.add(list1.remove(0).data);
    }
    
    while(list2.length > 0){
      merged.add(list2.remove(0).data);
    }
    
    return merged;
  }
  
  /**
   * merge 2 lists
   * @param {SinglyLinkedList} listmerged
   * @return {SinglyLinkedList} sorted
   */
  mergeSort(list){
    if(list.length < 2) return list;
    
    const mid = Math.floor(list.length / 2);
    
    let leftList = new SinglyLinkedList();
    let rightList = new SinglyLinkedList();
    
    let index = 0;
    let node = list.head;
    
    while(node){
      
      if(index < mid){
        leftList.add(node.data);
      }
      else{
        rightList.add(node.data);
      }
      
      node = node.next;
      index++;
    }
   
    leftList = this.mergeSort(leftList);
    rightList = this.mergeSort(rightList);
    
    return this.merge(leftList, rightList);
  }
  
  /**
   * sort the list using merge sort
   * O(n log n) time complexity and O(n) space complexity
   */
  sort(){
    this.head = this.mergeSort(this).head;
  }
  
  /**
   * remove duplicates using merge O(n log n) time complexity and O(n) space complexity
   */
  removeDuplicates(){
    
    //sort the linked list
    this.sort();
    
    //loop through it and remove duplicates
    let node = this.head;
    let prevNode = undefined;
    
    while(node){
      
      if(prevNode !== undefined && node.data === prevNode.data){
        
        //remove the duplicate
        prevNode.next = node.next;
      }
      
      prevNode = node;
      node = node.next;
    }
  }
}
  
//TEST .......
const tests = [
  [11, 2, 12, 4, 2, 16, 7, 7],
  [10, 10, 9, 8, 9, 7, 6, 5, 4, 4, 3, 2, 2, 1],
  [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10, 10],
  [],
  [1110],
  [11, 11]
];

tests.forEach(params => {
  const ll = new SinglyLinkedList();
  ll.addRange(...params);
  console.log(ll.toString()); 
  ll.removeDuplicates();
  console.log('Without duplicates: ' + ll.toString()); 
  console.log('---------------------------------------');
});
