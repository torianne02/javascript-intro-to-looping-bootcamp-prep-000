function forLoop(array, t) {
  var output = [];
  for (var i = 0; i < t; i++) {
    if (i === 0) {
      output.push("I am 1 strange loop.");
    }
    else {
      output.push("I am " + i + " strange loops.");
    }
  }
  return output;
}
