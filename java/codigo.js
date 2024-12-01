let randomNumber1 = Math.floor(Math.random() *6) + 1
let randomDiceImg = 'dice'+  randomNumber1 + 'png'
let randomIMG = '/img' + randomDiceImg 
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src',randomIMG)
