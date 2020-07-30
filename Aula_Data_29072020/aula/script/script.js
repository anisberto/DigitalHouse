function seque(start, stop) {
    for (var i = start; i <= stop; i++) {
        if (i % 2 == 0) {
            console.log(" Numero e par")
        } else {
            console.log("numero é impar")
        }
    }
}
seque(10, 15);
dizerOi("ola")

var dizerOi = function(nome) {
    console.log(nome)
}

var funcConstruc = new Function("Anisberto", "console.log(15);")
funcConstruc("aNISBERTO")