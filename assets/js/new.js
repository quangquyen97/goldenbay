function activeButton (){
    var btnContainer = document.getElementById("pagi-group");

var btns = btnContainer.getElementsByClassName("button-eff");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}
}
activeButton()
