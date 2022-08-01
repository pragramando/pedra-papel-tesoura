const jogadas = document.querySelectorAll('#pedra, #papel, #tesoura');
const marcadorPc = document.getElementById('pcPoints')  ;
const marcadorHumano = document.getElementById('humanoPoints');
const resultRodada = document.getElementById('resultado');
const marcadorRodada = document.getElementById('round');
const botaoReset = document.getElementById('reset');


let pontoPc=0; 
let pontoHumano = 0;
let rodada = 0;

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function playOneRound(jogada){

    let jogadaHumano;
    let jogadaPc = numAleatorio(1,4);
    if(jogada === 'pedra'){
        jogadaHumano = 1;
    }
    else if(jogada === 'papel'){
        jogadaHumano = 2;
    }
    else{
        jogadaHumano = 3;
    }

    if(jogadaHumano == jogadaPc){
        return 0;
    }
    else if(jogadaHumano == 1 && jogadaPc == 3){
        return 1;
    }
    else if(jogadaHumano == 2 &&jogadaPc == 1 ){
        return 1;
    }
    else if(jogadaHumano == 3 && jogadaPc == 2){
        return 1;
    }
    else{
        return 2;
    }
}

function empate(){
    marcadorRodada.textContent = rodada;
    resultRodada.textContent ="Rodada empadata"; 
}

function pontoParaPc(x){
    marcadorRodada.textContent = rodada;
    marcadorPc.textContent = pontoPc;
    resultRodada.textContent ="PC ganhou esta rodada"; 
}

function pontoParaHumano(x){
    marcadorRodada.textContent = rodada;
    marcadorHumano.textContent = pontoHumano;
    resultRodada.textContent ="Humano ganhou esta rodada"; 
}

function pcGanhou(){

    jogadas.forEach((botao) => 
    botao.removeEventListener('click', () => {
    }
)
);
}

function humanoGanhou(){

    jogadas.forEach((botao) => 
    botao.removeEventListener('click', () => {
    }
)
);
}

function jogo(jogadaHumano){

    let jogada = jogadaHumano;
    while(pontoHumano < 5 && pontoPc < 5){
        let resultado = playOneRound(jogada);
        if(resultado == 0){
            rodada++;
            return empate();
        }
        else if(resultado ==1){
            rodada++;
            pontoPc++;
            return pontoParaPc(pontoPc);
        }
        else{
            rodada++;
            pontoHumano++;
            return pontoParaHumano(pontoHumano);
        }
    }
        if(pontoHumano > pontoPc){
            resultRodada.textContent = "Você venceu!!!";
            resultRodada.style.color = "red";
        return humanoGanhou();
    }
    else{
        resultRodada.textContent = "Computador venceu...";
        resultRodada.style.color = "red";
        return pcGanhou();
    }  
}

jogadas.forEach((botao) => 
    botao.addEventListener('click',() =>{
        jogo(botao.id)
    })
);

botaoReset.addEventListener('click',() => {
    pontoPc=0; 
    pontoHumano = 0;
    rodada = 0;
    resultRodada.style.color = "black";
    resultRodada.textContent = "Preparadx para jogar?";
    marcadorRodada.textContent = rodada;
    marcadorHumano.textContent = pontoHumano;
    marcadorPc.textContent = pontoPc;
})


