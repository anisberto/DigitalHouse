function iniciaJogo() {

    var url = window.location.search;
    var nivel_jogo = url.replace("?", "");
    var tempo_segundos = 0;
    if (nivel_jogo == 1) {
        tempo_segundos = 120;
    }

    if (nivel_jogo == 2) {
        tempo_segundos = 60;
    }

    if (nivel_jogo == 3) {
        tempo_segundos = 30;
    }

    document.getElementById('cronometro').innerHTML = tempo_segundos;
    var qtde_baloes = 20;

    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;

    cria_baloes(qtde_baloes);
    contagem_tempo(tempo_segundos)
    var timerId = null;

}


function contagem_tempo(segundos) {
    segundos = segundos - 1;

    if (segundos == -1) {
        clearTimeout(timerId);
        game_over();
        remover_event()
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;
    timerId = setTimeout("contagem_tempo(" + segundos + ")", 1000);
}

function cria_baloes(qtde_baloes) {
    for (var i = 1; i <= qtde_baloes; i++) {
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '15px';
        balao.id = 'b' + i
        balao.onclick = function() {
            estourar(this)
        }
        document.getElementById('cenario').appendChild(balao);
    }
}

function estourar(img) {
    var id_balao = img.id;
    document.getElementById(id_balao).setAttribute('onclick', "")
    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
    pontuacao();

}

function pontuacao() {

    var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
    var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);

    baloes_inteiros--;
    baloes_estourados++;

    document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    situacao_jogo(baloes_inteiros);

}

function situacao_jogo(baloes_inteiros) {
    if (baloes_inteiros == 0) {
        alert('Parabéns, você conseguiu estourar todos os balões a tempo');
        parar_jogo();
    }
}

function parar_jogo() {
    clearTimeout(timerId);
}

function remover_event() {
    var i = 1
    while (document.getElementById('b' + 1)) {
        document.getElementById('b' + 1).onclick = ''
        i++
    }
}