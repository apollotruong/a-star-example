function heuristic(a, b) {
    var d = dist(a.i,a.j,b.i,b.j); //Euclidean Distance
    // var d = abs(a.i - b.i) + abs(a.j - b.j); // Manhattan distance
    return d;
  }