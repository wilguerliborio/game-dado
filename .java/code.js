let randomNumber1 = Math.floor(Math.random() *6) + 1
let randomDiceImg = 'dice' +  randomNumber1 + '.png'
let randomIMG = 'images/' + randomDiceImg
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src',randomIMG)
// player 2
let randomNumber2 = Math.floor(Math.random() *6) + 1
let randomDice2 = 'images/dice' +  randomNumber2 + '.png'
document.querySelectorAll('img')[1].setAttribute('src',randomDice2)
if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🏆 jogador 1 ganhou'
} else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = '🏆 jogador 2 ganhou'
} else{
    document.querySelector('h1').innerHTML = "empate"
}
    

