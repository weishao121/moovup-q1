const adjacencyList = new Map();
adjacencyList.set("A", new Set(["B","D","H"]))
adjacencyList.set("B", new Set(["A","C","D"]))
adjacencyList.set("C", new Set(["B","D","F"]))
adjacencyList.set("D", new Set(["A","B","C","E"]))
adjacencyList.set("E", new Set(["D","F","H"]))
adjacencyList.set("F", new Set(["C","E","G"]))
adjacencyList.set("G", new Set(["F","H"]))
adjacencyList.set("H", new Set(["A","E","G"]))

const vertices = ["A","B","C","D","E","F","G","H"]

let visitedNodes = [];
let currentPath = [];
let allPaths = [];

const dfsAllPaths = (start, end) => {
  let visited = new Map()
  for (let char of vertices) {
    visited.set(char, false)
  }
  let currentPath = []
  currentPath.push(start)
  
  dfsHelper(start, end, visited, currentPath)
}
const dfsHelper = (current, end, visited, currentPath) => {
  if (current === end) {
    console.log(currentPath)
    return
  }
  visited.set(current, true)

  for (let curNode of adjacencyList.get(current)) {
    if (!visited.get(curNode)) {
      currentPath.push(curNode)
      dfsHelper(curNode, end, visited, currentPath)
      currentPath.splice(currentPath.indexOf(curNode), 1)
    }
  }
  visited.set(current, false)
}

console.log()
console.log("Q1a: All possible paths between A-H")
dfsAllPaths("A", "H")

const bfsShortestPath = (startNode, stopNode) => {
  const visited = new Set()
  const queue = []
  queue.push({ node: startNode, dist: 0 })
  visited.add(startNode)

  while (queue.length > 0) {
    const { node, dist } = queue.shift()
    if (node === stopNode) console.log(dist)

    for (const curNode of adjacencyList.get(node)) {
      if (!visited.has(curNode)) {
        queue.push({ node: curNode, dist: dist + 1 })
        visited.add(curNode)
      }
    }
  }
};

console.log()
console.log("Q1b: Least number of hops between A-H")
bfsShortestPath("A", "H")

