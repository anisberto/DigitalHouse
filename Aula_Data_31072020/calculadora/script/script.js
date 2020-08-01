function calcular() {
    var operacao = document.getElementById('operacao').value;
    var numero1 = document.getElementById('num1').value
    var numero2 = document.getElementById('num2').value

    var resultado = 0
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)

    if (num1 == '' || num1 == null) {
        alert('Favor digitar um número válido para operação (num1)');
        return false;
    }
    if (num2 == '' || num2 == null) {
        alert('Favor digitar um número válido para operação (num2)');
        return false;
    }
    var resultado = null;

    switch (operacao) {
        case '1':
            resultado = numero1 - numero2
            break;
        case '2':
            resultado = numero1 + numero2
            break;
        case '3':
            resultado = numero1 * numero2
            break;
        case '4':
            resultado = numero1 / numero2
            break;
        default:
            alert('A opção selecionada é inválida');
            return false;
    }
    document.getElementById('resultado').value = resultado
}