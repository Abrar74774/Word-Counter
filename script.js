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
txt.addEventListener("focus", function(){txt.style.boxShadow = "0px 0px 4px 4px dodgerblue"});
txt.addEventListener("blur", function(){txt.style.boxShadow = "0 0 0 0 dodgerblue"});

