class Algoritmo {
    constructor() {
        this.oTexto = document.getSelection("#texto")
        this.oMostrar = document.getSelection("#mostrar")
    }
    palabras() {
        this.oTexto.value = []
        for (let i = 0; i < this.oTexto.value.length; i++) {
            let letras = this.oTexto.value[i];
        }
    };
    mostrarDatos() {
        this.palabras()
    };

}


document.addEventListener("DOMContentLoaded", function() {
    oAlgoritmo = new Algoritmo
    document.getElementById("submit").onclick = oAlgoritmo.mostrarDatos.bind(oAlgoritmo)
}, false);