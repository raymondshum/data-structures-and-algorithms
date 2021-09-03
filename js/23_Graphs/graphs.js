/**
 * Graphs
 */

/**
 * Common ways to store graphs:
 *
 * Adjacency Matrix
 *
 * - A B C
 * A 0 1 0
 * B 1 0 1
 * C 0 0 1
 *
 * Takes up more space in sparse graphs
 * Slower to iterate over all edges
 * Faster to lookup specific edge
 *
 * Adjacency List
 *
 *   [
 * 0  [1, 2],
 * 1  [0, 2],
 * 2  [0, 1]
 *   ]
 *
 * Can also use a hash table
 *
 * Takes up less space in sparse graphs
 * Faster to iterate over all edges
 * Can be slower to find specific edge
 */

/**
 * Implementation (undirected graph)
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = [];
      return true;
    }
    return false;
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (
        !this.adjacencyList[v1].includes(v2) &&
        !this.adjacencyList[v2].includes[v1]
      ) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        return true;
      }
    }
    return false;
  }

  removeEdge(v1, v2) {
    // can add error handling - remove vertex from other edge if one edge no longer exists

    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      let v1Index = this.adjacencyList[v2].indexOf(v1);
      let v2Index = this.adjacencyList[v1].indexOf(v2);

      if (v1Index >= 0) {
        this.adjacencyList[v2].splice(v1Index, 1);
      }
      if (v2Index >= 0) {
        this.adjacencyList[v1].splice(v2Index, 1);
      }
      return true;
    }
    return false;

    // alternative to splice
    // set adjacencyList equal to all elements of adjacencyList[v1] - v2
    // this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2 );
  }

  removeVertex(vertex) {
    // Alternative
    // if(!this.adjacencyList[vertex]) return false;

    // for (const [city, flights] of Object.entries(this.adjacencyList) ){
    //   let index = flights.indexOf(vertex);
    //   if(index >= 0) {
    //     flights.splice(index, 1);
    //   }
    // }
    // delete this.adjacencyList[vertex];
    // return true;

    if (!this.adjacencyList[vertex]) return false;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return true;
  }

  // Depth First Traversal
  DFRec(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList; // needed to use adjacency list in helper function (context)

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) return dfs(neighbor)
      });
    })(start);
    return result;
  }

  // Iterative approach has different results
  // Visits right neighbor ("C") first because of pop()
  DFIte(start){
    const visited = {};
    const result = [];
    const stack = [start];
    let currentVertex;

    visited[start] = true;
    while(stack.length){
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // Breadth first traversal
  BFIte(start){
    const queue = [start];
    const visited =  {};
    visited[start] = true;
    const result = [];
    let currentVertex = [];

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

/**
 * Test
 */

let graph = new Graph();
console.log(graph.addVertex("Tokyo")); //true
console.log(graph.addVertex("Shanghai")); // true
console.log(graph.addVertex("Paris")); // true
console.log(graph.addVertex("Milan")); // true
console.log(graph.addVertex("New York")); // true
console.log(graph.addVertex("New York")); // false
console.log(graph); // Graph { adjacencyList: { Tokyo: [], Shanghai: [], 'New York': [] } }

console.log(graph.addEdge("Tokyo", "Shanghai")); // true
console.log(graph.addEdge("Tokyo", "Shanghai")); // false
console.log(graph.addEdge("Tokyo", "Paris")); // false
console.log(graph.addEdge("Tokyo", "Milan")); // false
console.log(graph.adjacencyList["Tokyo"]); // [ 'Shanghai' ]
console.log(graph.removeEdge("Tokyo", "Shanghai")); // true
console.log(graph.removeEdge("Tokyo", "Shanghai")); // true

// Graph { adjacencyList:
//   { Tokyo: [ 'Paris', 'Milan' ],
//     Shanghai: [],
//     Paris: [ 'Tokyo' ],
//     Milan: [ 'Tokyo' ],
//     'New York': [] } }
console.log(graph);

console.log(graph.removeVertex("Tokyo")); // true
console.log(graph.removeVertex("Tokyo")); // false
console.log(graph); // Graph { adjacencyList: { Shanghai: [], Paris: [], Milan: [], 'New York': [] } }

graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFRec("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.DFIte("A")); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(graph.BFIte("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]