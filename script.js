function calcular() {
    var inputAltura = document.getElementById('inputAltura')
    var valorAltura = inputAltura.value 

    var inputPeso = document.getElementById('inputPeso')
    var valorPeso = inputPeso.value 

    var calculoIMC = valorPeso / (valorAltura**2)

    if (calculoIMC <= 18.5) {
        var classificacaoIMC = 'MAGREZA'
    } else if (calculoIMC >= 18.6 && calculoIMC <= 24.9) {
        classificacaoIMC = 'NORMAL'
    } else if (calculoIMC >=25 && calculoIMC <= 30) {
        classificacaoIMC = 'SOBREPESO'
    } else if (calculoIMC >= 30.1 && calculoIMC <= 40) {
        classificacaoIMC = 'OBESIDADE'
    }

    document.getElementById('resultadoIMC').innerText = 'Altura: ' + valorAltura + ' metros \n' + 'Peso: ' + valorPeso + 'kg \n' + 
    'Classificação: ' + calculoIMC.toFixed(2) + ' (' + classificacaoIMC + ')'

}