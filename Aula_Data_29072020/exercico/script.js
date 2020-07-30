////////////////////

let verificar = (numero) => {
        if (numero % 2 == 0) {
            console.log("Numero e par: " + numero)
        } else {
            console.log("Numero é impar: " + numero)
        }
    }
    /////////////////////

eImpar = numero => numero % 2 == 1 ? console.log("Primo") : console.log("nao e primo")

//////////////////////

var callback = () => console.log('feliz ano novo')

function func_callback(callback) {
    setTimeout(() => {
        for (var start = 10; start > 0; start--) {
            console.log(start);
        }
        callback();
    }, 1000);
}

func_callback(callback);

/////////////////////


////////////////////
var arrayNotas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0]
var arrayObj = [{ produto: "Arroz", preco: 15 }, { produto: "feijão", preco: 10 }]

var arrayFilter = arrayNotas.filter((numero) => numero > 7)

function notasFilter(nota) {
    var notasFiltradas = []
    for (var i = 0; i < nota.length; i++) {
        if (nota[i] > 7) {
            notasFiltradas.push(nota[i])
        }
    }
    return notasFiltradas
}

function valueObj(obj) {
    var precoTotal = 0
    for (var i = 0; i < obj.length; i++) {
        precoTotal += obj[i].preco
    }
    return precoTotal
}

function distrubuirAulas(obj) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].serie == 9) {
            obj[i].disciplina = "Fisica"
        } else {
            obj[i].disciplina = "Historia"
        }
        return obj
    }
}
var imprimirArray = (array) => {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}