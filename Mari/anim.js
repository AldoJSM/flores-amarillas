// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
//Cancion https://youtu.be/kZmjdQL-SwY?si=nM48hVoU9lk_5uxY
var lyricsData = [
  { text: "Dame lo que esconde tu mirada,", time: 14 },
  { text: "Y te doy el lado izquierdo de mi pecho", time: 21 },
  { text: "Dame lo que se te de la gana", time: 29 },
  { text: "A tus pies el mundo entero por un beso", time: 35.5 },
  { text: "Te regalo toda la luz de la luna", time: 43.5 },
  { text: "Mi pasado, mi fortuna", time: 49 },
  { text: "Mi futuro, mi razón", time: 53 },
  { text: "Esta noche no la cambio por ninguna", time: 58 },
  { text: "Si esta vida es solo una", time: 63.5 },///
  { text: "Contigo sabe mejor", time: 67.5 },
  {text: "...", time: 73 },
  { text: "Dame el universo de tu cama", time: 88 },
  { text: "Y te doy mi vida entera y mucho más", time: 94.5 },
  { text: "Dame alguna de tus madrugadas", time: 103 },
  { text: "Y te doy mi corazón por la mitad", time: 110 },
  { text: "Te regalo toda la luz de la luna", time: 117 },
  { text: "Mi pasado, mi fortuna", time: 123 },
  { text: "Mi futuro, mi razón", time: 126.5 },
  { text: "Esta noche no la cambio por ninguna", time: 132 },
  { text: "Si esta vida es solo una", time: 137.5 },
  { text: "Contigo sabe mejor", time: 141.5 },
  { text: "...", time: 147.5 },
  { text: "Dame una esperanza", time: 160 },
  { text: "Dame noches que no acaban", time: 163.5 },
  { text: "Un beso robado", time: 167.5 },
  { text: "Un pecado, una canción", time: 170.5 },
  { text: "Y no digas nada, se mi luz de madrugada", time: 175.5 },
  { text: "Mis latidos, mis sentidos, mi respiración", time: 182.5 },
  { text: "<3", time: 191.5 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;

  // Buscar la línea actual comparando con la siguiente
  for (let i = 0; i < lyricsData.length; i++) {
    let current = lyricsData[i];
    let next = lyricsData[i + 1];

    if (time >= current.time && (!next || time < next.time)) {
      // fade-in de 1s
      var fadeInDuration = 1;
      var opacity = Math.min(1, (time - current.time) / fadeInDuration);

      lyrics.style.opacity = 1;
      lyrics.innerHTML = current.text;
      return;
    }
  }

  // Si no hay línea actual
  lyrics.style.opacity = 0;
  lyrics.innerHTML = "";
}

setInterval(updateLyrics, 250);

//funcion titulo
// Función para ocultar el título después de 20 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 20 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 14000);
