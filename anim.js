// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "(Sabes una cosa)", time: 16 },
  { text: "Tengo algo que decirte y no sé cómo empezar a explicar", time: 20.5 },
  { text: "lo que te quiero contar", time: 26 },
  { text: "(Sabes una cosa)", time: 30.5 },
  { text: "No encuentro las palabras ni verso, rima o prosa", time: 35.5 },
  { text: "Quizá, con una rosa te lo pueda decir", time: 40 },
  { text: "(Sabes una cosa)", time: 45.5 },
  { text: "No sé ni desde cuando llegaste de repente", time: 50.5 },
  { text: "Mi corazón se puso a cantar", time: 54.5 },
  { text: "(Sabes una cosa)", time: 60.5 },
  { text: "Te quiero, niña hermosa, y te entrego en esta rosa", time: 65.5 },
  { text: "La vida que me pueda quedar", time: 69.5 },
  { text: "Doy gracias al cielo", time: 74 },
  { text: "Por haberte conocido x2", time: 76.5 },
  { text: "Doy gracias al cielo", time: 80.5 },
  { text: "Y le cuento a las estrellas", time: 83 },
  { text: "Lo bonito que sentí x2", time: 85 },
  { text: "Cuando te conocí", time: 89 },
  { text: "Sabes", time: 91.5 },
  { text: "Sabes una cosa", time: 94.5 },
  { text: "Que yo te quiero", time: 98.5 },
  { text: "Que, sin ti, me muero", time: 102.5 },
  { text: "Si estás lejos", time: 105.5 },
  { text: "...", time: 109.5 },
  { text: "(Sabes una cosa)", time: 124.5 },
  { text: "Tengo algo que decirte y no sé cómo empezar a explicar", time: 129.5 },
  { text: "lo que te quiero contar", time: 134.5 },
  { text: "(Sabes una cosa)", time: 139 },
  { text: "Te quiero y te venero, te adoro y te deseo", time: 144.5 },
  { text: "Cariño, ven y déjate amar", time: 148.5 },
  { text: "Doy gracias al cielo", time: 153 },
  { text: "Por haberte conocido x2", time: 155 },
  { text: "Doy gracias al cielo", time: 159.5 },
  { text: "Y le cuento a las estrellas", time: 162 },
  { text: "Lo bonito que sentí x2", time: 163.5 },
  { text: "Cuando te conocí", time: 167.5 },
  { text: "Sabes", time: 169.5 },
  { text: "Sabes una cosa", time: 173 },
  { text: "Que yo te quiero", time: 177.5 },
  { text: "Que, sin ti, me muero", time: 181.5 },
  { text: "Si estás lejos", time: 183.5 },
  { text: "(Sabes una cosa) x2", time: 186.5 },
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
setTimeout(ocultarTitulo, 15000);
