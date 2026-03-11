// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsTraslate = document.querySelector("#lyricsTraslate");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Well, I will call you darlin,", time: 22 },
  { text: "And everything will be okay", time: 25 },
  { text: "Cause I know that I am yours", time: 27 },
  { text: "And you are mine", time: 29 },
  { text: "Doesn't matter anyway", time: 30 },
  { text: "In the night, we'll take a walk", time: 32 },
  { text: "It's nothing funny, just to talk", time: 36 },
  { text: "Put your hand in mine", time: 46 },//coro
  { text: "You know that I want to be with you all the time", time: 49 },
  { text: "You know that I won't stop, until I make you mine", time: 53 },
  { text: "You know that I won't stop, until I make you mine", time: 59 },
  { text: "Until I make you mine", time: 63 },//fin del coro
  { text: "", time: 66 },
  { text: "Well, I have called you darlin", time: 74 },
  { text: "And I'll say it again, again", time: 76 },
  { text: "So kiss me 'til I'm sorry, babe", time: 78 },
  { text: "That you are gone and I'm a mess", time: 80.5 },
  { text: "And I'll hurt you and you'll hurt me", time: 83.5 },
  { text: "And we'll say things we can't repeat", time: 87 },
  { text: "", time: 94 },
  { text: "Put your hand in mine", time: 111.5 },//CORO
  { text: "You know that I want to be with you all the time", time: 114 },
  { text: "You know that I won't stop, until I make you mine", time: 119 },
  { text: "You know that I won't stop, until I make you mine", time: 123.5 },
  { text: "Until I make you mine", time: 128 },//FIN CORO
  { text: "", time: 132 },//FIN CORO
];

var lyricsDataTraslate = [
  { text: "Bueno, te llamaré cariño,", time: 22 },
  { text: "Y todo irá bien", time: 25 },
  { text: "Porque sé que soy tuyo", time: 27 },
  { text: "Y tú eres mía", time: 29 },
  { text: "De todas formas no importa", time: 30 },
  { text: "Por la noche, daremos un paseo", time: 32 },
  { text: "No sera divertido, solo hablaremos", time: 36 },
  { text: "Pon tu mano en la mía", time: 46 },//coro
  { text: "Sabes que quiero estar contigo todo el tiempo", time: 49 },
  { text: "Sabes que no me detendré, hasta que te haga mía", time: 53 },
  { text: "Sabes que no me detendré, hasta que te haga mía", time: 59 },
  { text: "Hasta que te haga mía", time: 63 },//fin del coro
  { text: "", time: 66 },
  { text: "Bueno, te he llamado cariño", time: 74 },
  { text: "Y lo diré otra vez, otra vez", time: 76 },
  { text: "Así que besame hasta que me arrepienta, cariño", time: 78 },
  { text: "Que te has ido y yo soy un desastre", time: 80.5 },
  { text: "Y yo te haré daño y tú me harás daño", time: 83.5 },
  { text: "Y diremos cosas que no podemos repetir", time: 87 },
  { text: "", time: 94 },
  { text: "Pon tu mano en la mía", time: 111.5 },//CORO
  { text: "Sabes que quiero estar contigo todo el tiempo", time: 114 },
  { text: "Sabes que no me detendré, hasta que te haga mía", time: 119 },
  { text: "Sabes que no me detendré, hasta que te haga mía", time: 123.5 },
  { text: "Hasta que te haga mía", time: 128 },//FIN CORO
  { text: "", time: 132 },//FIN CORO
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
function updateLyricsTraslate() {
  var time = audio.currentTime;

  for (let i = 0; i < lyricsDataTraslate.length; i++) {
    let current = lyricsDataTraslate[i];
    let next = lyricsDataTraslate[i + 1];

    if (time >= current.time && (!next || time < next.time)) {
      // fade-in de 1s
      var fadeInDuration = 1;
      var opacity = Math.min(1, (time - current.time) / fadeInDuration);

      lyricsTraslate.style.opacity = 1;
      lyricsTraslate.innerHTML = current.text;
      return;
    }
  }
  // Si no hay línea actual
  lyricsTraslate.style.opacity = 0;
  lyricsTraslate.innerHTML = "";
}

setInterval(updateLyrics, 250);
setInterval(updateLyricsTraslate, 250);

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
