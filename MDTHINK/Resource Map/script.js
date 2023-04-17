var colorPicker = document.querySelector(".color1");
var paths = document.querySelector("state");

function setGradient(){
  var newColor = colorPicker.value;
  for (var i = 0; i < paths.length; i++) {
    paths[i].style.fill = newColor;
  }
}

colorPicker.addEventListener("input", setGradient);
