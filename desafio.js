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

const imprimirJogos = (cartasUsuario,cartasPc) => {
	let textoCartasUsuario = '';
	const arrayCartas = []

	for(let carta of cartasUsuario){
		textoCartasUsuario = textoCartasUsuario + carta.texto + ' ';
	}
	textoCartasUsuario = textoCartasUsuario.trim();
	arrayCartas.push(textoCartasUsuario,cartasPc[0].texto);
	
	return arrayCartas;
}


const arrayCartasUsuario = [];
const arrayCartasPc = [];
// sorteio das cartas
let primeiraCartaUsuario = comprarCarta();
let segundaCartaUsuario = comprarCarta();

let primeiraCartaPc = comprarCarta();
let segundaCartaPc = comprarCarta();


console.log("Boas vindas ao jogo de Blackjack!");
const novaRodada = confirm("Quer iniciar uma nova rodada?");

if(novaRodada){

	// confere se foram sorteados dois A's para um dos jogadores ao mesmo tempo
	while((primeiraCartaUsuario.valor === 11 && segundaCartaUsuario.valor === 11) || (primeiraCartaPc.valor === 11 && segundaCartaPc ===11)){
		console.log(`Um dos jogadores está com dois A's, cartas serão sorteadas novamente!`);
		
		primeiraCartaUsuario = comprarCarta();
		segundaCartaUsuario = comprarCarta();

		primeiraCartaPc = comprarCarta();
		segundaCartaPc = comprarCarta();
	}
	
	// inserindo as cartas dos jogadores em arrays
	arrayCartasUsuario.push(primeiraCartaUsuario,segundaCartaUsuario);
	arrayCartasPc.push(primeiraCartaPc,segundaCartaPc);
	
	console.log(imprimirJogos(arrayCartasUsuario,arrayCartasPc));

}