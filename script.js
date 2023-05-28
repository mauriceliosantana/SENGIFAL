$(document).ready(function() {
    // seleciona o carrossel
    var carousel = $('#carouselExampleIndicators');
    
    // anima o carrossel a cada 3 segundos
    setInterval(function() {
        carousel.carousel('next');
    }, 3000);
});

function mostrarProgramacaoDia(id) {
    // Obtem todos os elementos da classe programacao-section
    let secoes = document.getElementsByClassName("programacao-section");
  
    // Percorre cada elemento da classe programacao-section
    for (let i = 0; i < secoes.length; i++) {
      let secao = secoes[i];
  
      // Se o ID do elemento é igual ao ID do dia clicado, mostra o elemento
      if (secao.id === id) {
        secao.classList.add("visivel");
      }
      // Caso contrário, esconde o elemento
      else {
        secao.classList.remove("visivel");
      }
    }
}
  
function countdown() {
	// Define a data final da contagem regressiva
	const endDate = new Date("May 24, 2023 09:00:00").getTime();

	// Atualiza a contagem regressiva a cada segundo
	setInterval(function() {
		// Obtém a data atual
		const now = new Date().getTime();

		// Calcula a diferença entre a data final e a data atual
		const difference = endDate - now;

    // Verifica se a data atual passou da data final
    if (difference <= 0) {
      // Se a data atual passou da data final, limpa o intervalo e remove a contagem regressiva da página
      clearInterval(countdownInterval);
      document.querySelector(".countdown").style.display = "none";
      return;
    }

		// Calcula os dias, horas, minutos e segundos restantes
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		// Atualiza os elementos HTML com os valores da contagem regressiva
		document.querySelector(".days").innerHTML = days.toString().padStart(2, "0");
		document.querySelector(".hours").innerHTML = hours.toString().padStart(2, "0");
		document.querySelector(".minutes").innerHTML = minutes.toString().padStart(2, "0");
		document.querySelector(".seconds").innerHTML = seconds.toString().padStart(2, "0");
	}, 1000);
}

// Chama a função de contagem regressiva ao carregar a página
window.onload = function() {
  // Obtém a data atual
  const now = new Date().getTime();

  // Define a data limite para a contagem regressiva
  const endDate = new Date("May 24, 2023 09:00:00").getTime();

  // Verifica se a data atual já passou da data limite
  if (now > endDate) {
    // Se a data atual já passou da data limite, remove a contagem regressiva da página
    document.querySelector(".countdown").style.display = "none";
  } else {
    // Se a data limite ainda não foi atingida, inicia a contagem regressiva
    countdown();
  }
};

//Menu para dispositivos mobile
const menuIcon = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".nav-list.mobile");

menuIcon.addEventListener("click", function() {
  mobileMenu.classList.toggle("active");
});

// Data limite de inscrição

const dataLimite = new Date('May 19 2023 23:59:59 GMT-0300'); // define o horário limite de inscrição
const btnInscricao = document.getElementById('btn-inscricao');
const msgPrazoEncerrado = document.getElementById('msg-prazo-encerrado');

setInterval(() => { // função que é chamada a cada segundo
  const agora = new Date();
  if (agora > dataLimite) { // se a data atual for maior que a data limite, esconde o botão de inscrição e mostra a mensagem de prazo encerrado
    btnInscricao.style.display = 'none';
    msgPrazoEncerrado.style.display = 'block';
  }

  //console.log("1 seg")
}, 1000);
