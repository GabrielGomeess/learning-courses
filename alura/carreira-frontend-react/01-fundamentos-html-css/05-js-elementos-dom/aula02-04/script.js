const html = document.querySelector("html");
const titulo = document.querySelector(".app__title");
const banner = document.querySelector(".app__image");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.getElementById("alternar-musica")
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;
const startPauseBt = document.getElementById("start-pause");
const audioTempoAcabou = new Audio('./sons/beep.mp3');
const audioIniciar = new Audio('./sons/play.wav');
const audioPausar = new Audio('./pause.mp3');


let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play()
  } else {
    musica.pause()
  }
})

focoBt.addEventListener("click", () => {
  alterarContexto("foco");
  focoBt.classList.add('active');
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  curtoBt.classList.add('active');
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  longoBt.classList.add('active');
});

// Podemos deixar a declaração da função aqui no final,
// pois ela será executada somente se o usuario clicar
function alterarContexto(contexto) {
  botoes.forEach(function(contexto) {
    contexto.classList.remove('active');
  })

  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `./imagens/${contexto}.png`);
  

  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br />
          <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;

    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br />
          <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;

    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<br />
          <strong class="app__title-strong">Faça uma pausa longa.</strong>`;

    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    zerar();
    audioTempoAcabou.play()
    return
  }
  tempoDecorridoEmSegundos -= 1;
  console.log('Temporizador: ' + tempoDecorridoEmSegundos);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
  
  if (intervaloId) {  
    audioPausar.play();
    zerar();
    return
  }
  audioIniciar.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
}