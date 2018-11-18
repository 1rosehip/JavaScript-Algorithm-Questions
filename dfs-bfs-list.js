/**
 * DFS
 * Time complexity: O (V + E)
 * Space complexity: O(|E|)
 * @param {Array.<Array>} graph - Adjacency list
 * @param {string} start node
 */
const dfs = (graph, start) => {

	const stack = [start];
	const visited = {};

	while(stack.length > 0){

		const node = stack.pop();

		if(!visited[node]){
			console.log(node);
			visited[node] = true;
		}

		//find first non visited ajecent node and put it to the stack
		//1. find ajecent nodes
		const children = graph[node];
		
		//2. what nodes are non-visited?
		for(let i=0; i<children.length; i++){

			const child = children[i];
			
			if(!visited[child]){
				stack.push(child);
			}
		}
	}
};

/**
 * BFS
 * Time complexity: O (V + E)
 * Space complexity: O(|E|)
 * @param {Array.<Array>} graph - Adjacency list
 * @param {string} start node
 */
const bfs = (graph, start) => {

	const queue = [start];
	const visited = {};

	while(queue.length > 0){

		const node = queue.shift();

		if(!visited[node]){
			console.log(node);
			visited[node] = true;
	
			//find first non visited ajecent node and put it to the stack
			//1. find ajecent children
			const children = graph[node];
	
			//2. what nodes are non-visited?
			for(let i=0; i<children.length; i++){
	
				const child = children[i];
				if(!visited[child]){
					queue.push(child);
				}
			}
		}

	}
};
 
const graph = {
	'A': ['B', 'E'],
	'B': ['A', 'C', 'E'],
	'C': ['B', 'D'],
	'D': ['C', 'E', 'F'],
	'E': ['A', 'B', 'D'],
	'F': ['D']
};
			   
dfs(graph, 'A'); // A -> E -> D -> F -> C -> B
console.log('--------');
bfs(graph, 'A'); // A -> B -> E -> C -> D -> F

/*
A -> B
A -> E
B -> C
B -> E
C -> D
D -> E
D -> F
*/

/*
0 -> 2
0 -> 3
1 -> 0
1 -> 4
2 -> 1

dfs(0) -> 0 3 2 1 4 
*/
