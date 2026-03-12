// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hay veces que,", time: 20 },
  { text: "Mi alma baila tangos con la soledad", time: 25 },
  { text: "Y necesito de tabla tu amor", time: 30.5 },
  { text: "Para hacerme a ella en mi tempestad", time: 35.5 },
  { text: "Pensando en ti", time: 42 },
  { text: "Paso el dia pensando en ti", time: 46.5 },
  { text: "Enseñame", time: 51.5 },
  { text: "A escuchar tus labios, a leer el sol", time: 56.5 },
  { text: "Llevame", time: 61.5 },
  { text: "A donde los sueños fabrican tu voz", time: 67 },
  { text: "Pensando en ti", time: 73 },
  { text: "Duermo el odio pensando en ti", time: 76.5 },
  { text: "", time: 85.5 },
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
setTimeout(ocultarTitulo, 20000);
