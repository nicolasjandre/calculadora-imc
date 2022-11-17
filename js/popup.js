const body = document.getElementById('body')
const result = document.getElementById('result')
const calculator = document.getElementById('calculator-wrapper')

export const PopUp = {

    calculateIMC(weigth, heigth) {
        return (weigth / (heigth * heigth)).toFixed(1)
    },

    imcHealth(imc) {
        if (imc < 18.5) {
          return 'magro'
          }
          else if (imc >= 18.5 && imc <= 24.9) {
            return 'saudável'
          }
          else if (imc >= 25 && imc <= 29.9) {
            return 'com sobrepeso'
          }
          else if (imc >= 30 && imc <= 39.9) {
            return 'obeso'
          }
          else {
            return 'em obesidade grave'
          }
          
    },

    displayResultMessagePlusEventsToCloseButton(imc, imcHealth) {
        result.innerHTML = `
        <h2>Seu IMC é ${imc}</h2><h2>Você está ${imcHealth}</h2>
        <img id="close" src="./assets/close.svg" alt="Botão para fechar o resultado do IMC">
        `
        document.getElementById('close').addEventListener('click', PopUp.close)
        window.addEventListener('keydown', PopUp.handleKeyDown)
        },

    open() {
        body.classList.add('active');     
        result.classList.add('active');
        calculator.classList.add('active');
      },
      
    close() {
          body.classList.remove('active');
          result.classList.remove('active');
          calculator.classList.remove('active');
      },

    handleKeyDown(event) {
        if (event.key === 'Escape') {
          PopUp.close()
        }
    }
}