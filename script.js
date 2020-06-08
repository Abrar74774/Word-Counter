var txt = document.getElementById("input");
var output = document.getElementById("output");

function splitWords() {
  var input = String(document.getElementById("input").value);

  words = input.split(/\s+/);
  if (words[0] == " ") {
    words.shift();
  }
  if (words[words.length - 1] == " ") {
    words.pop();
  }
  console.log(words);
  output.innerHTML = words.length - 1;
}

txt.addEventListener("keyup", splitWords);
txt.addEventListener("focus", function () { txt.style.boxShadow = "0px 0px 8px 2px #00000024" });
txt.addEventListener("blur", function () { txt.style.boxShadow = "none" });

