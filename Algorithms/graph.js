//graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    //can use sink down like bubble and .pop()
    if (this.adjacencyList[vertex1]) {
      for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
        if (this.adjacencyList[vertex1][i] === vertex2)
          this.adjacencyList[vertex1].splice(i, 1);
      }
    }
    if (this.adjacencyList[vertex2]) {
      for (let i = 0; i < this.adjacencyList[vertex2].length; i++) {
        if (this.adjacencyList[vertex2][i] === vertex1)
          this.adjacencyList[vertex2].splice(i, 1);
      }
    } else {
      return undefined;
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    //   for (let key in this.adjacencyList){
    //     if (key in this.adjacencyList) {
    //       this.removeEdge(key, vertex)
    //     }
    //   }
    //   delete this.adjacencyList[vertex]
    //
    //   for (let key in this.adjacencyList){
    //     if (this.adjacencyList[key].includes(vertex)) {
    //       this.removeEdge(key, vertex)
    //     }
    //   }
    //   delete this.adjacencyList[vertex]
    //
  }

  depthFirstRecursive(vertex) {
    let memo = {};
    let result = [];
    let adjacencyList = this.adjacencyList;
    function helper(vertex) {
      if (!vertex) return null;
      memo[vertex] = true;
      result.push(vertex);
      for (let i = 0; i < adjacencyList[vertex].length; i++) {
        if (!memo[adjacencyList[vertex][i]]) {
          helper(adjacencyList[vertex][i]);
        }
      }
    }
    helper(vertex);
    return result;
  }

  depthFirstIterative(vertex) {
    let memo = {};
    let stack = [vertex];
    let result = [];
    let currVertex;

    memo[vertex] = true;
    while (stack.length) {
      currVertex = stack.pop();
      result.push(currVertex);

      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!memo[neighbor]) {
          memo[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirstIterative(start) {
    let current = start;
    let queue = [current];
    let result = [];
    let visited = {};
    visited[current] = true;
    while (queue.length) {
      current = queue.shift();
      result.push(current);
      for (let i = 0; i < this.adjacencyList[current].length; i++) {
        let cv = this.adjacencyList[current][i];
        if (!visited[cv]) {
          visited[cv] = true;
          queue.push(cv);
        }
      }
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("A");

console.log(g);

//Dijkstra's
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

let g = new WeightedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B","E", 3)
g.addEdge("C","D", 2)
g.addEdge("C","F", 4)
g.addEdge("D","E", 3)
g.addEdge("D","F", 1)
g.addEdge("E","F", 1)

g.dijkstra("A", "E")

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
