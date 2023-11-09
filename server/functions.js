// Función para obtener la distancia entre dos manzanas
function getDistanceBetweenManzanas(graph, manzanaA, manzanaB) {
  const edge = graph.edge(manzanaA, manzanaB);
  return edge ? edge.distance : Infinity; // Devolver Infinity si no hay una arista entre las manzanas
}

function nearestNeighborTSP(graph, startNode) {
  //const startNode = "A"; // Puedes elegir cualquier nodo como punto de inicio
  let currentNode = startNode;
  const visitedNodes = new Set();
  visitedNodes.add(currentNode);
  const path = [currentNode];
  let totalWeight = 0;

  while (visitedNodes.size < graph.nodeCount()) {
    let minWeight = Infinity;
    let nearestNode = null;

    graph.successors(currentNode).forEach((neighbor) => {
      if (!visitedNodes.has(neighbor)) {
        const edge = graph.edge(currentNode, neighbor);
        if (edge.weight < minWeight) {
          minWeight = edge.weight;
          nearestNode = neighbor;
        }
      }
    });

    if (nearestNode) {
      path.push(nearestNode);
      totalWeight += minWeight;
      visitedNodes.add(nearestNode);
      currentNode = nearestNode;
    }
  }

  // Regresar al nodo de inicio para completar el ciclo
  const returnEdge = graph.edge(currentNode, startNode);
  path.push(startNode);
  totalWeight += returnEdge.weight;

  return { path, totalWeight };
}

module.exports = { getDistanceBetweenManzanas, nearestNeighborTSP };
