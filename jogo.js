var altura = 0
var largura = 0
var vidas = 1
var tempoConfiguracao = 10
var intervaloMosca = 1000
var pontuacao = 0
var cronometro
var tempo

function ajustaTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoTela()


function iniciarCronometro() {
    cronometro = setInterval(function() {
        tempo--;
        if (tempo === 0) {
            clearInterval(aparecerMosca);
            clearInterval(cronometro);
            setTimeout(function vitoria() {
                document.getElementsByTagName("body")[0].className = "body-vitoria";
                document.getElementById("painel").classList.add("desvanecerPainel");
                if (document.getElementById('mosquito')) {
                    document.getElementById('mosquito').remove();
                }

                setTimeout(function vitoriaScreen() {
                    document.getElementById("home").className = "dnone";
                    document.getElementById("home-vitoria").className = "home-vitoria";
                }, 1000);
            }, 500);
        }
        document.getElementById("tempo").innerHTML = tempo;
    }, 1000);
}


//MOSCA ///////////////////////////////////////////////////////////////////////////


function posicaoRandomica() {
    var posicaoX = ""
    var posicaoY = ""

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //INICIO GAME OVER ///////////////////////////////////////////////////////////////////////////
        if (vidas > 3 && tempo > 0) {
            clearInterval(aparecerMosca) // Para de gerar mosquitos
            clearInterval(cronometro) // Para o cronômetro
        
            setTimeout(function gameOver() {
                // Aplica o estilo de Game Over ao body
                document.getElementsByTagName("body")[0].className = "body-gameOver"
        
                // Adiciona a animação de desvanecimento ao painel
                document.getElementById("painel").classList.add("desvanecerPainel")
        
                // Desvanece todas as divs dentro do painel
                var painel = document.getElementById("painel")
                var divs = painel.getElementsByTagName("div")
                for (var i = 0; i < divs.length; i++) {
                    divs[i].classList.add("desvanecerDivPainelJogo")
                }
        
                // Remove o mosquito se ele ainda estiver na tela
                if (document.getElementById('mosquito')) {
                    document.getElementById('mosquito').remove()
                }
        
                // Exibe a tela de Game Over após 1 segundo
                setTimeout(function gameOverScreen() {
                    document.getElementById("home").className = "dnone"
                    document.getElementById("home-gameOver").className = "home-gameOver"
                }, 1000)
            }, 500) // Delay antes de iniciar o Game Over
        }
        if (vidas <= 3) {
            document.getElementById('v' + vidas).className = "vazio"
            document.getElementById('v' + vidas).src="imagens/coracao vazio.png"
        
            vidas++
        }
    }

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoRadomico() + ladoRandomico()

    if (mosca.classList.contains("mosca1")) {
        posicaoX = Math.floor(Math.random() * (largura - 60))
        posicaoY = Math.floor(Math.random() * (altura - 210))
    }
    if (mosca.classList.contains("mosca2")) {
        posicaoX = Math.floor(Math.random() * (largura - 80))
        posicaoY = Math.floor(Math.random() * (altura - 230))
    }
    if (mosca.classList.contains("mosca3")) {
        posicaoX = Math.floor(Math.random() * (largura - 100))
        posicaoY = Math.floor(Math.random() * (altura - 250))
    }
    if (mosca.classList.contains("mosca4")) {
        posicaoX = Math.floor(Math.random() * (largura - 105))
        posicaoY = Math.floor(Math.random() * (altura - 255))
    }
    if (mosca.classList.contains("mosca5")) {
        posicaoX = Math.floor(Math.random() * (largura - 120))
        posicaoY = Math.floor(Math.random() * (altura - 270))
    }
    if (mosca.classList.contains("mosca6")) {
        posicaoX = Math.floor(Math.random() * (largura - 160))
        posicaoY = Math.floor(Math.random() * (altura - 310))
    }

    posicaoX = posicaoX < 15 ? 15 : posicaoX
    posicaoY = posicaoY < 15 ? 15 : posicaoY
    
    console.log(posicaoX, posicaoY)

    mosca.style.left = posicaoX + "px"
    mosca.style.top = posicaoY + "px"
    mosca.style.position = "absolute"
    mosca.id = "mosquito"
    mosca.onclick = function() {
        if (mosca.classList.contains("mosca1")) {
            var audio = new Audio('audios/pop.mp3')
            audio.addEventListener('canplaythrough', function() {
            audio.play()
            })
            pontuacao += 3
            document.getElementById("pontuacao").innerHTML = pontuacao
        }
        if (mosca.classList.contains("mosca2")) {
            var audio = new Audio('audios/pop.mp3')
            audio.addEventListener('canplaythrough', function() {
            audio.play()
            })
            pontuacao += 2
            document.getElementById("pontuacao").innerHTML = pontuacao
            document.getElementById("pontuacao").innerHTML = pontuacao
        }
        if (mosca.classList.contains("mosca3")) {
            var audio = new Audio('audios/pop.mp3')
            audio.addEventListener('canplaythrough', function() {
            audio.play()
            })
            pontuacao += 1
            document.getElementById("pontuacao").innerHTML = pontuacao
        }
        if (mosca.classList.contains("mosca4")) {
            var audio = new Audio('audios/pop2.mp3')
            audio.addEventListener('canplaythrough', function() {
            audio.play()
            })
            pontuacao += 4
            document.getElementById("pontuacao").innerHTML = pontuacao
        }
        if (mosca.classList.contains("mosca5")) {
            var audio = new Audio('audios/pop2.mp3')
            audio.addEventListener('canplaythrough', function() {
            audio.play()
            })
            pontuacao += 5
            document.getElementById("pontuacao").innerHTML = pontuacao
        }
        if (mosca.classList.contains("mosca6")) {
            var audio = new Audio('audios/pop2.mp3')
            audio.addEventListener('canplaythrough', function() {
            audio.play()
            })
            pontuacao += 7
            document.getElementById("pontuacao").innerHTML = pontuacao
        }
        this.remove()
    }

    document.body.appendChild(mosca)

    console.log(ladoRandomico())
}
function tamanhoRadomico() {
    var tamanho = Math.floor(Math.random() * 180)

    if (tamanho === 67 || tamanho === 133) {
        return 'mosca4'
    }
    if (tamanho === 55 || tamanho === 129) {
        return 'mosca5'
    }
    if (tamanho === 5) {
        return 'mosca6'
    }
    if (tamanho < 60) {
        return 'mosca1'
    }
    if (tamanho < 120) {
        return 'mosca2'
    }
    if (tamanho < 180) {
        return 'mosca3'
    }
}
function ladoRandomico() {
    var lado = Math.floor(Math.random() * 2)

    if (lado === 0) {
        return ' ladoA'
    }
    if (lado === 1) {
        return ' ladoB'
    }
}


//GAME OVER ///////////////////////////////////////////////////////////////////////////


function reiniciarJogo() {
    window.location.reload()
}

function voltarMenu() {
    window.location.href = "index.html"
}


//MENU ////////////////////////////////////////////////////////////////////////////////


function inciarJogo() {
    // Obtém a dificuldade e o tempo salvos no localStorage
    var dificuldade = localStorage.getItem("dificuldade") || "1" // Padrão: Fácil
    var tempo = localStorage.getItem("tempo") || "10" // Padrão: 10 segundos

    // Redireciona para a página do jogo com a dificuldade e o tempo como parâmetros
    window.location.href = "jogo.html?dificuldade=" + dificuldade + "&tempo=" + tempo
}

function configuracoes() {
    document.getElementsByTagName("body")[0].className = "body-configuracoes"
    
    document.getElementById("home-menu").className = "dnone"

    document.getElementById("home-configuracoes").className = "home-configuracoes"
}


//CONFIGURACAO ////////////////////////////////////////////////////////////////////////////////


function atualizarDificuldade() {
    var dificuldade = document.getElementById("dificuldadeRange").value
    var dificuldadeTexto = ""

    switch (dificuldade) {
        case "1":
            intervaloMosca = 1000 // Fácil: mosquitos aparecem a cada 1 segundo
            dificuldadeTexto = "Fácil"
            break
        case "2":
            intervaloMosca = 750 // Médio: mosquitos aparecem a cada 0.75 segundos
            dificuldadeTexto = "Médio"
            break
        case "3":
            intervaloMosca = 500 // Difícil: mosquitos aparecem a cada 0.5 segundos
            dificuldadeTexto = "Difícil"
            break
    }

    document.getElementById("dificuldade").innerHTML = dificuldadeTexto

    // Salva a dificuldade no localStorage
    localStorage.setItem("dificuldade", dificuldade)
}

function atualizarTempo() {
    tempoConfiguracao = document.getElementById("tempoRange").value
    document.getElementById("tempoConfiguracao").innerHTML = tempoConfiguracao

    // Salva o tempo no localStorage
    localStorage.setItem("tempo", tempoConfiguracao)
}

// Verifica o tamanho da tela ao carregar a página
window.addEventListener('load', function() {
    if (window.innerWidth < 1000) {
        // Exibe a tela de bloqueio
        document.getElementById('block-screen').classList.remove('dnone');
        // Esconde o conteúdo do jogo
        document.getElementById('home-menu').classList.add('dnone');
    } else {
        // Esconde a tela de bloqueio
        document.getElementById('block-screen').classList.add('dnone');
        // Exibe o conteúdo do jogo
        document.getElementById('home-menu').classList.remove('dnone');
    }
});

// Verifica o tamanho da tela ao redimensionar a janela
window.addEventListener('resize', function() {
    if (window.innerWidth < 1000) {
        // Exibe a tela de bloqueio
        document.getElementById('block-screen').classList.remove('dnone');
        // Esconde o conteúdo do jogo
        document.getElementById('home-menu').classList.add('dnone');
    } else {
        // Esconde a tela de bloqueio
        document.getElementById('block-screen').classList.add('dnone');
        // Exibe o conteúdo do jogo
        document.getElementById('home-menu').classList.remove('dnone');
    }
});