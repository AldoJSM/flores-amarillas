// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Nunca había amado como a ti", time: 5 },
  { text: "Desde que me quieres, comprendí", time: 13 },
  { text: "Que Dios tenía otros planes para mí", time: 21 },
  { text: "Y, hasta que tú llegaste, finalmente lo entendí", time: 23 },
  { text: "Que era nuestro momento", time: 29 },
  { text: "Y que ya nos tocaba", time: 32 },
  { text: "Ser feliz", time: 36 },
  { text: "¿Qué más puedo pedir? Si tú lo tienes todo", time: 41 },
  { text: "Contigo me aplaqué, me hiciste a tu modo", time: 46 },
  { text: "Por ti, mi corazón, ya no me cabe", time: 49 },
  { text: "Aquí, en el pecho", time: 52 },
  { text: "Quiero gastar los días de mi vida a tu lado", time: 58 },
  { text: "Me gusta que nos vean tomados de la mano", time: 62 },//1:02
  { text: "Que todo el mundo sepa que me tienes", time: 67 },//1:07
  { text: "Enamorado", time: 70 },//1:10
  { text: "Que Dios tenía otros planes para mí", time: 99 },//1:39
  { text: "Y, hasta que tú llegaste, finalmente lo entendí", time: 102 },//1:42
  { text: "Que era nuestro momento", time: 106 },
  { text: "Y que ya nos tocaba", time: 110 },
  { text: "Ser feliz", time: 114 },
  { text: "¿Qué más puedo pedir? Si tú lo tienes todo", time: 120 },
  { text: "Contigo me aplaqué, me hiciste a tu modo", time: 123 },
  { text: "Por ti, mi corazón, ya no me cabe", time: 128 },
  { text: "Aquí, en el pecho", time: 130 }, //2:10
  { text: "Quiero gastar los días de mi vida a tu lado", time: 136 },//2:16
  { text: "Me gusta que nos vean tomados de la mano", time: 140 },
  { text: "Que todo el mundo sepa que me tienes", time: 143 },
  { text: "Enamorado", time: 147}
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500);

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