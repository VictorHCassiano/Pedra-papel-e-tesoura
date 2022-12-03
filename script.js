console.log("Hello World");
    const escolhaComputador = ["pedra","papel","tesoura"]
    
    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
      }
      get_random(escolhaComputador)
    
    
      

   
    let losses = 0;
    let victories = 0;
    
      function PChoiceHTML(computerChoice){
        document.getElementById("escolhaPC").textContent = `Minha escolha foi: ${computerChoice}`

      }

    function incrementVictories() {
    victories++;
    document.getElementById("victory-counter").textContent  = `Vitorias: ${victories} | Derrotas: ${losses}`; 
    checkBestOfFive(); 
    }

  
    function incrementLosses() {
    losses++; 
    document.getElementById("victory-counter").textContent  = `Vitorias: ${victories} | Derrotas: ${losses}`; 
    checkBestOfFive(); 
    }

   
    function checkBestOfFive() {
   
    if (victories === 5) {
        losses = 0;
        victories = 0;
        alert("Voce ganhou Parabens!!!");
        
    }
    else if (losses === 5){
        losses = 0;
        victories = 0;
        alert("Parece que eu ganhei, mais sorte na proxima");
        
    }

    }

    function jogarRodada(escolhaPlayer, escolhaComputador) {
            //escolhas de pedra
            if(escolhaPlayer == "pedra" && escolhaComputador == "tesoura"){
               
                incrementVictories()
                checkBestOfFive() 
            } 
            else if(escolhaPlayer == "pedra" && escolhaComputador == "papel"){
               
                incrementLosses()
                checkBestOfFive() 
            }
            else if(escolhaPlayer == "pedra" && escolhaComputador == "pedra"){
               
            }
            //escolhas de papel
            else if(escolhaPlayer == "papel" && escolhaComputador == "pedra"){
                
                incrementVictories()
                checkBestOfFive() 
            }
            else if(escolhaPlayer == "papel" && escolhaComputador == "tesoura"){
                
                incrementLosses()
                checkBestOfFive() 
            }
            else if(escolhaPlayer == "papel" && escolhaComputador == "papel"){
               
            }
            //escolhas de tesoura
            else if(escolhaPlayer == "tesoura" && escolhaComputador == "papel"){
               
                incrementVictories()
                checkBestOfFive() 
            }
            else if(escolhaPlayer == "tesoura" && escolhaComputador == "pedra"){
                
                incrementLosses()
                checkBestOfFive() 
            }
            else if(escolhaPlayer == "tesoura" && escolhaComputador == "tesoura"){
              
            }
      }
     
      function pedra(){
        escolhaPlayer="pedra"
        computerChoice = get_random(escolhaComputador)
        PChoiceHTML(computerChoice)
        jogarRodada(escolhaPlayer,computerChoice)
        
      }

      function papel(){
        escolhaPlayer="papel"
        computerChoice = get_random(escolhaComputador)
        PChoiceHTML(computerChoice)
        jogarRodada(escolhaPlayer,computerChoice)
      }

      function tesoura(){
        escolhaPlayer="tesoura"
        computerChoice = get_random(escolhaComputador)
        PChoiceHTML(computerChoice)
        jogarRodada(escolhaPlayer,computerChoice)
      }
     
      


        // function jogo(){
        //     alert("Voce jogará 5 rounds de pedra papel e tesoura comigo ")
        //     for (let i = 0; i < 5; i++) {
        //         const computerSelection =  get_random(escolhaComputador)
        //         alert(`Round ${i+1}`)
        //         let escolhaPlayer = window.prompt("Digite Sua escolha, entre pedra papel e tesoura").toLowerCase()
        //         alert(`Minha escolha é ${computerSelection}`)
        //         jogarRodada(escolhaPlayer,computerSelection)

                
        //      }
        //      alert("A partida acaba aqui, vamos ver os resultados")
        //      if(contVitoria>contDerrota){
        //         alert("Parabens, voce ganhou a partida.. desta vez")
        //      }
        //    else if(contDerrota>contVitoria){
        //      alert("Parece que eu ganhei esta partida, mais sorte na proxima amigo")
        //    }
        //    else if(contVitoria==contDerrota){
        //     alert("Empate, voce teve sorte")
        //    }

        // }
        // jogo()