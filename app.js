let listaDeNumerosSorteados = [];
let numerosMax=10;
let numeroSecreto = numeroAleatorio();
let tentativas =1;

function exibirNaTela (tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial()
{
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e '+numerosMax);
}
exibirMensagemInicial();


function verificarChute()
{
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto)
    {
        exibirNaTela('h1', '!!ACERTOU!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        let mesagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirNaTela('p', mesagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(chute > numeroSecreto)
        {
            exibirNaTela('p', 'O número secreto é menor');
        }
        else
        {
            exibirNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random()*numerosMax+1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosNaLista == numerosMax)
    {
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return numeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}