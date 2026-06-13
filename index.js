const PI = 3.14159;
let radius;
let circumfrence;

// radius = window.prompt('Enter the radius of a circle');

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumfrence + "cm";
}