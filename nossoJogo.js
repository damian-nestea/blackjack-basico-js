/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 
 console.log("Boas vindas ao jogo de Blackjack!");
 const novaRodada = confirm("Quer iniciar uma nova rodada?");
 let primeiraCartaUsuario;
 let segundaCartaUsuario;
 let primeiraCartaPc;
 let segundaCartaPc;
 let cartasUsuario = "";
 let cartasPc = "";
 let pontuacaoPc = 0;
 let pontuacaoUsuario = 0;
 
 if(confirm){
	// jogo do usuario
	primeiraCartaUsuario = comprarCarta();
	segundaCartaUsuario = comprarCarta();
	cartasUsuario = `${primeiraCartaUsuario.texto} - ${segundaCartaUsuario.texto}`;
	pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
	
	// jogo do pc
	primeiraCartaPc = comprarCarta();
	segundaCartaPc = comprarCarta();
	cartasPc = `${primeiraCartaPc.texto} - ${segundaCartaPc.texto}`;
	pontuacaoPc = primeiraCartaPc.valor + segundaCartaPc.valor;
	
	// apresentação das cartas e pontuação no console.
	console.log(`Cartas do Usuário : ${cartasUsuario} \nPontuação do Usuário: ${pontuacaoUsuario}`);
	console.log(`Cartas do Pc : ${cartasPc} \nPontuação do Pc: ${pontuacaoPc}`);
	
	// apresentação do ganhador ou caso de empate no console
	if(pontuacaoUsuario > pontuacaoPc){
		console.log(`O usuário ganhou!`);
	}else if(pontuacaoUsuario < pontuacaoPc){
		console.log(`O pc ganhou!`);
	}else{
		console.log(`Empate!`);
	}
 }else{
	 console.log(`O jogo acabou`);
 }