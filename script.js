/*Todos os elementos HTML usados*/

let recorde = document.getElementById("recorde");
let chances = document.getElementById("chances");
let playAgain = document.getElementById("again");
let github = document.getElementById('github');
let checar = document.getElementById("check");
let number = document.getElementById("number");
let title = document.getElementById("title");
let interrogacao = document.getElementById("interrogacao");
let description = document.getElementById("description-choice");
let main = document.getElementById('main');
let random = Number(Math.round(20*Math.random()));
let score = 10;
let highscore = 0;


checar.addEventListener('click', ()=>{

    /*Verificação de limite de número*/

    if(Number(number.value)>20 || Number(number.value)<0){
        alert('Insira um número entre 0 e 20');
    }

    /*Início*/

    /*Caso de vitória*/

    else if (Number(number.value)===random){

        if (score!=0){
            title.innerHTML="PARABÉNS, VOCÊ ACERTOU!";
            description.innerHTML = '🎯 Na mosca!';
            interrogacao.textContent = random;
            main.style.backgroundColor="#51B874";
            github.style.backgroundColor="#51B874"
            interrogacao.style.backgroundColor="#51B874";
            playAgain.style.backgroundColor="#51B874";
           
            if (score>highscore){
                highscore=score;
                recorde.textContent = highscore;
            }
          

        }
        
    }
    /*Caso de derrota e perda de chances*/

    else if (Number(number.value)!=random){
        score--;
        chances.textContent = score;
        description.innerHTML = '😩 Errou!';

        if (score<1){
            title.innerHTML="💩 VOCÊ PERDEU!";
            score=0;
            chances.textContent=0;
            main.style.backgroundColor="#9A3C3C";
            github.style.backgroundColor="#9A3C3C"
            interrogacao.style.backgroundColor="#9A3C3C"
            playAgain.style.backgroundColor="#9A3C3C"
        }
    }

})


/*Botão de jogar denovo*/

playAgain.addEventListener('click', ()=>{

    /*Ativa um novo número sorteado aleatório*/

    random = Number(Math.round(20*Math.random()));

    /*Ativa o padrão do site*/

    chances.textContent = 10;
    title.innerHTML="ADIVINHE O NÚMERO";
    description.innerHTML = '...';
    score = 10;
    interrogacao.textContent ="?";
    main.style.backgroundColor="#34515A";;
    github.style.backgroundColor="#34515A";
    interrogacao.style.backgroundColor="#34515A";
    playAgain.style.backgroundColor="#34515A";
})


/*Dia 26/01/22*/
/*Gabriel Rodrigo*/