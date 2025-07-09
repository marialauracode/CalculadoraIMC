function calcular() {
    var inputAltura = document.getElementById('inputAltura')
    var valorAltura = inputAltura.value

    var inputPeso = document.getElementById('inputPeso')
    var valorPeso = inputPeso.value

    var calculoIMC = valorPeso / (valorAltura ** 2)

    if (isNaN(valorAltura) && isNaN(valorPeso)) {
        alert('Entradas inválidas! Tente novamente')
        document.getElementById('resultadoIMC').innerText = ""

    } else {
        if (calculoIMC <= 18.5) {
            var classificacaoIMC = 'MAGREZA'
            document.getElementById('resultadoIMC').innerHTML = 'Altura: ' + valorAltura + ' metros <br>' + 'Peso: ' + valorPeso + 'kg <br>' +
                'Classificação: <span style="color:#96A3AB; font-weight:700">' + calculoIMC.toFixed(2) + ' (' + classificacaoIMC + ')</span>'
        } else if (calculoIMC >= 18.6 && calculoIMC <= 24.9) {
            classificacaoIMC = 'NORMAL'
            document.getElementById('resultadoIMC').innerHTML = 'Altura: ' + valorAltura + ' metros <br>' + 'Peso: ' + valorPeso + 'kg <br>' +
                'Classificação: <span style="color:#0AAF68; font-weight:700">' + calculoIMC.toFixed(2) + ' (' + classificacaoIMC + ')</span>'
        } else if (calculoIMC >= 25 && calculoIMC <= 30) {
            classificacaoIMC = 'SOBREPESO'
            document.getElementById('resultadoIMC').innerHTML = 'Altura: ' + valorAltura + ' metros <br>' + 'Peso: ' + valorPeso + 'kg <br>' +
                'Classificação: <span style="color:#E2B037; font-weight:700">' + calculoIMC.toFixed(2) + ' (' + classificacaoIMC + ')</span>'
        } else if (calculoIMC >= 30.1 && calculoIMC <= 40) {
            classificacaoIMC = 'OBESIDADE'
            document.getElementById('resultadoIMC').innerHTML = 'Altura: ' + valorAltura + ' metros <br>' + 'Peso: ' + valorPeso + 'kg <br>' +
                'Classificação: <span style="color:#C3413F; font-weight:700">' + calculoIMC.toFixed(2) + ' (' + classificacaoIMC + ')</span>'
        } else if (calculoIMC > 40) {
            classificacaoIMC = 'OBESIDADE GRAVE'
            document.getElementById('resultadoIMC').innerHTML = 'Altura: ' + valorAltura + ' metros <br>' + 'Peso: ' + valorPeso + 'kg <br>' +
                'Classificação: <span style="color:#530F0A; font-weight:700">' + calculoIMC.toFixed(2) + ' (' + classificacaoIMC + ')</span>'
        }

    }

    inputAltura.value = ""
    inputPeso.value = ""


}