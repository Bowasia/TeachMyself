var slider = document.getElementById("slider");
var display = document.getElementById("display");

display.innerHTML = slider.value + '%';

slider.oninput = function (){
    display.innerHTML = this.value + '%';
    slider.style.background = "linear-gradient(to right, rgb(179, 21, 194) " + this.value + "%, rgb(231, 231, 231) " + this.value + "%)"
}