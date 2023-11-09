const graphlib = require("graphlib");

// Crear un nuevo grafo dirigido
const cityMap = new graphlib.Graph();

// Agregar nodos (vértices) al grafo
//Cada grafo es un interseccion
cityMap.setNode("A");
cityMap.setNode("B");
cityMap.setNode("C");
cityMap.setNode("D");
cityMap.setNode("E");
cityMap.setNode("F");
// cityMap.setNode("A", { x: 0, y: 0 });
// cityMap.setNode("B", { x: 2, y: 0 });
// cityMap.setNode("C", { x: 3, y: 0 });
// cityMap.setNode("D", { x: 4, y: 0 });
// cityMap.setNode("E", { x: 6, y: 0 });
// cityMap.setNode("F", { x: 7, y: 0 });
// cityMap.setNode("G", { x: 0, y: 1 });
// cityMap.setNode("H", { x: 1, y: 1 });
// cityMap.setNode("I", { x: 2, y: 1 });
// cityMap.setNode("J", { x: 4, y: 1 });
// cityMap.setNode("K", { x: 6, y: 1 });
// cityMap.setNode("L", { x: 0, y: 2 });
// cityMap.setNode("M", { x: 1, y: 2 });
// cityMap.setNode("N", { x: 3, y: 2 });
// cityMap.setNode("O", { x: 4, y: 2 });
// cityMap.setNode("P", { x: 5, y: 2 });
// cityMap.setNode("Q", { x: 6, y: 3 });
// cityMap.setNode("R", { x: 1, y: 3 });
// cityMap.setNode("S", { x: 2, y: 3 });
// cityMap.setNode("T", { x: 3, y: 3 });
// cityMap.setNode("U", { x: 4, y: 3 });
// cityMap.setNode("V", { x: 1, y: 4 });
// cityMap.setNode("W", { x: 4, y: 4 });
// cityMap.setNode("X", { x: 0, y: 5 });
// cityMap.setNode("Y", { x: 1, y: 5 });
// cityMap.setNode("Z", { x: 3, y: 5 });
// cityMap.setNode("1", { x: 0, y: 6 });
// cityMap.setNode("2", { x: 1, y: 6 });
// cityMap.setNode("3", { x: 3, y: 6 });
// cityMap.setNode("4", { x: 4, y: 7 });
// cityMap.setNode("5", { x: 0, y: 9 });
// cityMap.setNode("6", { x: 1, y: 8 });
// cityMap.setNode("7", { x: 1, y: 9 });

// Agregar aristas (conexiones) al grafo
//Cada arista es una union entre intersecciones

/******************CREACION DE ARISTAS DE LOS GRAFOS****************/

//ejemplo
cityMap.setEdge("A", "C", { directed: false, distance: 40 });
cityMap.setEdge("C", "B", { directed: false, distance: 30 });
cityMap.setEdge("B", "D", { directed: false, distance: 40 });
cityMap.setEdge("D", "E", { directed: false, distance: 20 });
cityMap.setEdge("E", "F", { directed: false, distance: 30 });
cityMap.setEdge("D", "A", { directed: false, distance: 10 });
cityMap.setEdge("E", "B", { directed: false, distance: 10 });
cityMap.setEdge("E", "A", { directed: false, distance: 10 });
cityMap.setEdge("A", "D", { directed: false, distance: 10 });
cityMap.setEdge("D", "F", { directed: false, distance: 10 });
cityMap.setEdge("B", "F", { directed: false, distance: 10 });
cityMap.setEdge("E", "B", { directed: false, distance: 10 });

//Avenidas con una sola direccion
// //Av Jose granda
// cityMap.setEdge("F", "E", { directed: true, distance: 1 });
// cityMap.setEdge("E", "D", { directed: true, distance: 2 });
// cityMap.setEdge("D", "C", { directed: true, distance: 1 });
// cityMap.setEdge("C", "B", { directed: true, distance: 1 });
// cityMap.setEdge("B", "A", { directed: true, distance: 2 });

// //Av Genaro delgado
// cityMap.setEdge("A", "G", { directed: true, distance: 1 });
// cityMap.setEdge("G", "L", { directed: true, distance: 1 });
// cityMap.setEdge("L", "X", { directed: true, distance: 3 });
// cityMap.setEdge("X", "1", { directed: true, distance: 1 });
// cityMap.setEdge("1", "5", { directed: true, distance: 3 });

// //Av Proceres
// cityMap.setEdge("7", "4", { directed: true, distance: 3 });
// cityMap.setEdge("4", "Q", { directed: true, distance: 3 });
// cityMap.setEdge("Q", "F", { directed: true, distance: 3 });

// //Calles
// cityMap.setEdge("H", "G", { directed: false, distance: 1 });
// cityMap.setEdge("H", "M", { directed: false, distance: 1 });
// cityMap.setEdge("H", "I", { directed: false, distance: 1 });

// cityMap.setEdge("I", "B", { directed: false, distance: 1 });
// cityMap.setEdge("I", "S", { directed: false, distance: 2 });

// cityMap.setEdge("J", "O", { directed: false, distance: 1 });
// cityMap.setEdge("J", "D", { directed: false, distance: 1 });

// cityMap.setEdge("K", "E", { directed: false, distance: 1 });
// cityMap.setEdge("K", "P", { directed: false, distance: 1 });

// cityMap.setEdge("M", "L", { directed: false, distance: 1 });
// cityMap.setEdge("M", "R", { directed: false, distance: 1 });

// cityMap.setEdge("N", "C", { directed: false, distance: 2 });
// cityMap.setEdge("N", "T", { directed: false, distance: 1 });
// cityMap.setEdge("N", "O", { directed: false, distance: 1 });

// cityMap.setEdge("O", "P", { directed: false, distance: 1 });
// cityMap.setEdge("O", "U", { directed: false, distance: 1 });

// cityMap.setEdge("P", "Q", { directed: false, distance: 1 });

// cityMap.setEdge("R", "V", { directed: false, distance: 1 });
// cityMap.setEdge("R", "S", { directed: false, distance: 1 });

// cityMap.setEdge("S", "T", { directed: false, distance: 1 });

// cityMap.setEdge("T", "U", { directed: false, distance: 1 });

// cityMap.setEdge("U", "Q", { directed: false, distance: 2 });
// cityMap.setEdge("U", "W", { directed: false, distance: 1 });

// cityMap.setEdge("V", "Y", { directed: false, distance: 1 });
// cityMap.setEdge("V", "W", { directed: false, distance: 3 });

// cityMap.setEdge("W", "Z", { directed: false, distance: 1 });

// cityMap.setEdge("X", "1", { directed: false, distance: 1 });
// cityMap.setEdge("X", "Y", { directed: false, distance: 1 });

// cityMap.setEdge("Y", "2", { directed: false, distance: 1 });
// cityMap.setEdge("Y", "Z", { directed: false, distance: 2 });

// cityMap.setEdge("Z", "3", { directed: false, distance: 1 });

// cityMap.setEdge("1", "2", { directed: false, distance: 1 });
// cityMap.setEdge("1", "5", { directed: false, distance: 3 });

// cityMap.setEdge("2", "6", { directed: false, distance: 2 });
// cityMap.setEdge("2", "3", { directed: false, distance: 2 });

// cityMap.setEdge("3", "6", { directed: false, distance: 2 });
// cityMap.setEdge("3", "4", { directed: false, distance: 1 });

// cityMap.setEdge("4", "7", { directed: false, distance: 3 });
// cityMap.setEdge("4", "Q", { directed: false, distance: 3 });

// cityMap.setEdge("5", "6", { directed: false, distance: 1 });
// cityMap.setEdge("5", "7", { directed: false, distance: 1 });

/*******************************************************************/

function findShortestPaths(graph, startNode) {
  const shortestPaths = graphlib.alg.dijkstra(graph, startNode);

  // Filtrar resultados para eliminar el nodo de inicio
  delete shortestPaths[startNode];

  return shortestPaths;
}

// Función para encontrar la ruta más óptima sin importar repetición de nodos
function findOptimalPath(graph) {
  const nodes = graph.nodes();
  const allPossiblePermutations = permutator(nodes);

  let optimalPath = null;
  let optimalDistance = Infinity;

  for (const permutation of allPossiblePermutations) {
    let totalDistance = 0;
    let error = false;
    for (let i = 0; i < permutation.length - 1; i++) {
      const fromNode = permutation[i];
      const toNode = permutation[i + 1];
      const edge = graph.edge(fromNode, toNode);

      if (edge !== undefined) {
        totalDistance += edge.distance;
      } else {
        error = true;
        break;
      }
    }
    if (error) continue;
    if (totalDistance < optimalDistance) {
      optimalDistance = totalDistance;
      optimalPath = permutation;
    }
  }

  return { path: optimalPath, distance: optimalDistance };
}

// Función para generar todas las permutaciones posibles de una lista de elementos
function permutator(inputArr) {
  const result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(inputArr);
  return result;
}

module.exports = { cityMap, findShortestPaths, findOptimalPath };
