const weigthInput = document.getElementById('weigthInput')
const heigthInput = document.getElementById('heigthInput')
const body = document.getElementById('body')
const result = document.getElementById('result')
const calculator = document.getElementById('calculator-wrapper')
const header = document.getElementById('header')
const form = document.querySelector('form')

function openPopUp() {
  body.classList.add('active');     
  result.classList.add('active');
  calculator.classList.add('active');
}

function closePopUp() {
    body.classList.remove('active');
    result.classList.remove('active');
    calculator.classList.remove('active');
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closePopUp()
  }
}

form.onsubmit = (event) => {

  event.preventDefault()

  let weigthHealth

  let weigth = document.getElementById('weigthInput').value
    
  let heigth = document.getElementById('heigthInput').value
  heigth = heigth * 0.01
    
  let imc = weigth / (heigth * heigth)
  imc = imc.toFixed(1)
    
  if (imc < 18.5) {
      weigthHealth = 'magro'
    }
    else if (imc >= 18.5 && imc <= 24.9) {
      weigthHealth = 'saudável'
    }
    else if (imc >= 25 && imc <= 29.9) {
      weigthHealth = 'com sobrepeso'
    }
    else if (imc >= 30 && imc <= 39.9) {
      weigthHealth = 'obeso'
    }
    else {
      weigthHealth = 'em obesidade grave'
    }

  if (isNaN(imc) || imc == Infinity) {
      header.classList.add('active')
        
      setTimeout( () => {
          header.classList.remove('active');
      }, "4000")
  } else {
      weigthInput.value = ""
      heigthInput.value = ""
        
      openPopUp()
        
      result.innerHTML = `
      <h2>Seu IMC é ${imc}</h2><h2>Você está ${weigthHealth}</h2>
      <img id="close" src="./assets/close.svg" alt="Botão para fechar o resultado do IMC">
      `
      document.getElementById('close').addEventListener('click', closePopUp)
      window.addEventListener('keydown', handleKeyDown)
  }
}