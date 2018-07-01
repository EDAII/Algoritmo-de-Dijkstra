function calculaMenorCaminho(aresta, numVertices, verticeInicial) {
  var caminho = new Array(numVertices);
  caminho[verticeInicial] = true;
  var tamanhoCaminhos = new Array(numVertices);
  var anterior = new Array(numVertices);
  for (var i = 0; i < numVertices; i++) {
    tamanhoCaminhos[i] = aresta[verticeInicial][i];
    if (aresta[verticeInicial][i] != Infinity) {
      anterior[i] = verticeInicial;
    }
  }
  tamanhoCaminhos[verticeInicial] = 0;
  for (var i = 0; i < numVertices - 1; i++) {
    var closest = -1;
    var closestDistance = Infinity;
    for (var j = 0; j < numVertices; j++) {
      if (!caminho[j] && tamanhoCaminhos[j] < closestDistance) {
        closestDistance = tamanhoCaminhos[j];
        closest = j;
      }
    }
    caminho[closest] = true;
    for (var j = 0; j < numVertices; j++) {
      if (!caminho[j]) {
        var distanciasPossiveis = tamanhoCaminhos[closest] + aresta[closest][j];
        if (distanciasPossiveis < tamanhoCaminhos[j]) {
          tamanhoCaminhos[j] = distanciasPossiveis;
          anterior[j] = closest;
        }
      }
    }
  }
  return { "verticeInicial": verticeInicial,
           "tamanhoCaminhos": tamanhoCaminhos,
           "anterior": anterior };
}

function retornaCaminho(dadosMenorCaminho, verticeFinal) {
  var caminho = [];
  while (verticeFinal != dadosMenorCaminho.verticeInicial) {
    caminho.unshift(verticeFinal);
    verticeFinal = dadosMenorCaminho.anterior[verticeFinal];
  }
  return caminho;
}
