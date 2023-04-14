function convert() {
  var input = document.getElementById("input-text").value;
  var lines = input.split("\n");
  var output = "";
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].trim() !== "") {
      output += "- " + lines[i].trim() + "<br>";
    }
  }
  document.getElementById("output-list").innerHTML = output;
}


