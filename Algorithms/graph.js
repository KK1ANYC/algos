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
}

let graph = new Graph();

graph.addVertex("pink");
console.log(graph);
