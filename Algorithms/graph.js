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
}

let graph = new Graph();

graph.addVertex("green");
graph.addVertex("yellow");
graph.addVertex("blue");
graph.addEdge("green", "blue");
graph.addEdge("yellow", "green");
graph.removeEdge("green", "blue");
console.log(graph);
