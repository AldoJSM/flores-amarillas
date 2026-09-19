// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me da coraje verte", time: 16 },
  { text: "Igual que un simple amigo", time: 19.5 },
  { text: "Y hablar de lo preciso", time: 23.5 },
  { text: "Delante de la gente", time: 27 },
  { text: "Me da coraje verte", time: 31.5 },
  { text: "Después de una mañana", time: 34.5 },
  { text: "De loco amor sin pausa", time: 38.5 },
  { text: "Y hacer que no nos vimos", time: 43 },
  { text: "Me pongo como un loco", time: 47 },
  { text: "Y se me va la vida", time: 51 },
  { text: "Al ver que te acarician", time: 54.5 },
  { text: "Delante de mis ojos", time: 58.5 },
  { text: "Tenerme que callarme", time: 61.5 },
  { text: "Decirte hasta mañana", time: 66 },
  { text: "Pensar que allí en la calma", time: 70 },
  { text: "Disfrutarás sin mí", time: 74 },
  { text: "Quiero perderme contigo", time: 78 },
  { text: "Como se pierde el horizonte", time: 85.5 },
  { text: "Como las aves en la noche", time: 91.5 },
  { text: "Como la estrella y los sonidos", time: 97.5 },
  { text: "Y jamás separarnos, jamás", time: 101.5 },
  { text: "Para nunca jamás", time: 108.5 },
  { text: "Quiero perderme contigo", time: 113 },
  { text: "Y verte junto a mí", time: 121 },
  { text: "Al despertar", time: 125 },
  { text: "Me da coraje verte", time: 140 },
  { text: "Igual que un simple amigo", time: 144.5 },
  { text: "Y hablarte lo preciso", time: 147.5 },
  { text: "Delante de la gente", time: 151.5 },
  { text: "Me da coraje verte", time: 155.5 },
  { text: "Después de una mañana", time: 159 },
  { text: "De loco amor sin pausa", time: 163 },
  { text: "Y hacer que no nos vimos", time: 167.5 },
  { text: "Me pongo como un loco", time: 171 },
  { text: "Y se me va la vida", time: 175 },
  { text: "Al ver que te acarician", time: 178.5 },
  { text: "Delante de mis ojos", time: 182.5 },
  { text: "Tenerme que callarme", time: 186 },
  { text: "Decirte hasta mañana", time: 190 },
  { text: "Pensar que allí en la calma", time: 193.5 },
  { text: "Disfrutarás sin mí", time: 198 },
  { text: "Quiero perderme contigo", time: 202.5 },
  { text: "Como se pierde el horizonte", time: 210 },
  { text: "Como las aves en la noche", time: 216 },
  { text: "Como la estrella y los sonidos", time: 221.5 },
  { text: "Y jamás separarnos, jamás", time: 225.5 },
  { text: "Para nunca jamás", time: 233 },
  { text: "Quiero perderme contigo", time:  237},
  { text: "Como se pierde el horizonte", time: 245 },
  { text: "Como las aves en la noche", time: 250.5 },
  { text: "Como la estrella y los sonidos", time: 257 },
  { text: "Y jamás separarnos, jamás", time: 260.5 },
  { text: "Para nunca jamás", time: 267 },
  { text: "Quiero perderme contigo", time: 271.5 },
  { text: "Como se pierde el horizonte", time: 280 },
  { text: "Como las aves en la noche", time: 286 },
  { text: "", time: 298 }
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
