import { PopUp } from "./popup.js"
import { notANumberOrIsInfinity, returnInputsToBlank } from "./utility.js"
import { errorAlert } from "./error-alert.js"

const weigthInput = document.getElementById('weigthInput')
const heigthInput = document.getElementById('heigthInput')
const form = document.querySelector('form')

form.onsubmit = (event) => {

  event.preventDefault()

  let weigth = weigthInput.value
  let heigth = heigthInput.value * 0.01
  let imc = PopUp.calculateIMC(weigth, heigth)
  let imcHealth = PopUp.imcHealth(imc)

  if (notANumberOrIsInfinity(imc)) {
      errorAlert()
  } else {
    returnInputsToBlank()
    PopUp.open()
    PopUp.displayResultMessagePlusEventsToCloseButton(imc, imcHealth)
  }
}