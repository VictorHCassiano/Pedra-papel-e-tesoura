console.log("Hello World");
    const escolhaComputador = ["pedra","papel","tesoura"]
    
    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
      }
      get_random(escolhaComputador)
     let contVitoria = 0
     let contDerrota = 0
    
    function jogarRodada(escolhaPlayer, escolhaComputador) {
            //escolhas de pedra
            if(escolhaPlayer == "pedra" && escolhaComputador == "tesoura"){
                alert("Parabens!!! Pedra ganha de Tesoura")
                contVitoria++
            } 
            else if(escolhaPlayer == "pedra" && escolhaComputador == "papel"){
                alert("HAHA uma pena voce perdeu")
                contDerrota++
            }
            else if(escolhaPlayer == "pedra" && escolhaComputador == "pedra"){
                alert("Empate, sorte a sua")
            }
            //escolhas de papel
            else if(escolhaPlayer == "papel" && escolhaComputador == "pedra"){
                alert("Parabens!!! Papel ganha de Pedra")
                contVitoria++
            }
            else if(escolhaPlayer == "papel" && escolhaComputador == "tesoura"){
                alert("HAHA uma pena voce perdeu")
                contDerrota++
            }
            else if(escolhaPlayer == "papel" && escolhaComputador == "papel"){
                alert("Empate, sorte a sua")
            }
            //escolhas de tesoura
            else if(escolhaPlayer == "tesoura" && escolhaComputador == "papel"){
                alert("Parabens!!! Papel ganha de Pedra")
                contVitoria++
            }
            else if(escolhaPlayer == "tesoura" && escolhaComputador == "pedra"){
                alert("HAHA uma pena voce perdeu")
                contDerrota++
            }
            else if(escolhaPlayer == "tesoura" && escolhaComputador == "tesoura"){
                alert("Empate, sorte a sua")
            }
      }
      
      
        function jogo(){
            alert("Voce jogará 5 rounds de pedra papel e tesoura comigo ")
            for (let i = 0; i < 5; i++) {
                const computerSelection =  get_random(escolhaComputador)
                alert(`Round ${i+1}`)
                let escolhaPlayer = window.prompt("Digite Sua escolha, entre pedra papel e tesoura").toLowerCase()
                alert(`Minha escolha é ${computerSelection}`)
                jogarRodada(escolhaPlayer,computerSelection)

                
             }
             alert("A partida acaba aqui, vamos ver os resultados")
             if(contVitoria>contDerrota){
                alert("Parabens, voce ganhou a partida.. desta vez")
             }
           else if(contDerrota>contVitoria){
             alert("Parece que eu ganhei esta partida, mais sorte na proxima amigo")
           }
           else if(contVitoria==contDerrota){
            alert("Empate, voce teve sorte")
           }

        }
        jogo()