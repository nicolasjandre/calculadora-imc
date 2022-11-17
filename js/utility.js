export function notANumberOrIsInfinity(imc) {
    return isNaN(imc) || imc == Infinity
}

export function returnInputsToBlank() {
    weigthInput.value = ""
    heigthInput.value = ""
}