var txt = document.getElementById("input");
var output = document.getElementById("output");

function splitWords() {
  var input = String(document.getElementById("input").value);
  
  words =  input.split(/\s+/);  
  if (words[0] == " ") {
    words.shift();
  }
  if (words[words.length - 1] == " ") {
    words.pop();
  } 
  console.log(words);
  output.innerHTML = words.length - 1; 
}
 
txt.addEventListener("input", splitWords);

