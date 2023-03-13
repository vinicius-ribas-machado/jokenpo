let enyme = 0
let countdown = document.getElementById('countdown')
let Jokenpo = document.getElementById('Jokenpo')

function jogar(){

    countdown.innerHTML = 2
    Jokenpo.innerHTML = 'JO'

    setTimeout(function(){
        countdown.innerHTML = 1
        Jokenpo.innerHTML = 'JOKEN'
    },1000)
    
    setTimeout(function(){
        countdown.innerHTML = 0
        Jokenpo.innerHTML = 'JOKENPO'
    },2000)
    
    let yourhand = document.getElementById('yourhand')

    enyme = Math.floor(Math.random()* 3)+1

    setTimeout(function(){
        if(enyme == 1){
        yourhand.setAttribute('src', 'img/papel.png')
    }},2400)

    setTimeout(function(){
        if(enyme == 2){
        yourhand.setAttribute('src', 'img/tesoura.png')
    }},2400)

    setTimeout(function(){
        if(enyme == 3
            ){
        yourhand.setAttribute('src', 'img/pedra.png')
    }},2400)

    
}


let papell = 1
let tesourinha = 2
let pedrinha = 3

function Pedra(){
    let pedra = document.getElementById('myhand')
    
    jogar()
    
    pedra.setAttribute('src', 'img/pedra.png')
    
    if(enyme == pedrinha){
        console.log('empate')
    }else if(enyme == papell ){
        console.log('perdeu')
    }else('ganhou')
}

function Papel(){
    let pedra = document.getElementById('myhand')
    
    jogar()
    
    pedra.setAttribute('src', 'img/papel.png')

      if(enyme == pedrinha){
        console.log('ganhou')
    }else if(enyme == papell ){
        console.log('empate')
    }else('perdeu')
}

function Tesoura(){
    let pedra = document.getElementById('myhand')

    jogar()
    
    pedra.setAttribute('src', 'img/tesoura.png')

      if(enyme == pedrinha){
        console.log('perdeu')
    }else if(enyme == papell ){
        console.log('ganhou')
    }else('empate')
}
