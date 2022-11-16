document.getElementById('button').addEventListener('click', getVars)

function close() {
    document.getElementById('body').classList.remove('active');
    document.getElementById('result').classList.remove('active');
    document.getElementById('calculator').classList.remove('active');
}

function getVars() {
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

    if (isNaN(imc) || imc == Infinity || weigth == '' || heigth == '') {
        document.getElementById('header').classList.add('active')
        setTimeout( () => {
            document.getElementById('header').classList.remove('active');
        }, "4000")
    } else {
        document.getElementById('weigthInput').value = ""
        document.getElementById('heigthInput').value = ""
        document.getElementById('body').classList.add('active');
        document.getElementById('result').classList.add('active');
        document.getElementById('calculator').classList.add('active');
        document.getElementById('result').innerHTML = `
        <h2>Seu IMC é ${imc}</h2><h2>Você está ${weigthHealth}</h2>
        <img id="close" src="./assets/close.svg" alt="">
        `
        document.getElementById('close').addEventListener('click', close)
    }
}