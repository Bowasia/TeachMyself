var slider = document.getElementById("slider");
var display = document.getElementById("display");

display.innerHTML = slider.value + '%';

slider.oninput = function(){
    display.innerHTML = this.value + '%';
    this.style.background = "linear-gradient(to right, rgb(94, 57, 255) " + this.value + "%, rgb(241, 241, 241) " + this.value + "%)"
}