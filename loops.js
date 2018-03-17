function forLoop(array) {
  var output = [];
  for (var i = 0; i < 26; i++) {
    if (i === 1) {
      output.push("I am 1 strange loop.");
    }
    else {
      output.push("I am " + i + " strange loops.");
    }
  }
}