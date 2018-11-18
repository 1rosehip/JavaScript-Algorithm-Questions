/**
 * DFS
 * Time complexity: O (V + E)
 * Space complexity: O(|E|)
 * @param {Array.<Array>} graph - Adjacency matrix
 * @param {string} start node
 */
const dfs = (graph, start) => {

	const stack = [start];
	const visited = {};
	const A_CODE = 65;

	while(stack.length > 0){

		const node = stack.pop();
		console.log(node);
		visited[node] = true;

		//find first non visited ajecent node and put it to the stack
		//1. find ajecent nodes
		const index = node.charCodeAt(0) - A_CODE; // 'A' = 65, 65 - 65 = 0
		const edges = graph[index];

		//2. what nodes are non-visited?
		for(let i=0; i<edges.length; i++){

			const edge = edges[i];
			const letter = String.fromCharCode(i + A_CODE);
			if(!visited[letter] && edge){
				stack.push(letter);
				break;
			}
		}

	}
};

/**
 * BFS
 * Time complexity: O (V + E)
 * Space complexity: O(|E|)
 * @param {Array.<Array>} graph - Adjacency matrix
 * @param {string} start node
 */
const bfs = (graph, start) => {

	const queue = [start];
	const visited = {};
	const A_CODE = 65;

	while(queue.length > 0){

		const node = queue.shift();

		if(!visited[node]){
			console.log(node);
			visited[node] = true;
	
			//find first non visited ajecent node and put it to the stack
			//1. find ajecent nodes
			const index = node.charCodeAt(0) - A_CODE; // 'A' = 65, 65 - 65 = 0
			const edges = graph[index];
	
			//2. what nodes are non-visited?
			for(let i=0; i<edges.length; i++){
	
				const edge = edges[i];
				const letter = String.fromCharCode(i + A_CODE);
				if(!visited[letter] && edge){
					queue.push(letter);
				}
			}
		}

	}
};

//              A  B  C  D  E  F            
const graph = [[1, 1, 0, 0, 1, 0],  //A
               [1, 0, 1, 0, 1, 0],  //B
               [0, 1, 0, 1, 0, 0],  //C
               [0, 0, 1, 0, 1, 1],  //D
               [1, 1, 0, 1, 0, 0],  //E
			   [0, 0, 0, 1, 0, 0]]; //F

			   
dfs(graph, 'A'); // A -> B -> C -> D -> E -> F
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
