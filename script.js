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

function copyToClipboard() {
  var output = document.getElementById("output-list").innerText;
  var textarea = document.createElement("textarea");
  textarea.value = output;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}



