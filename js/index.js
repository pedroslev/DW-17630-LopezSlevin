var i = 0;
var txt = 'Bienvenidos'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Bienvenidos").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



$('.CarouselCursos').carousel()