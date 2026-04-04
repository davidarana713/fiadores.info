// FORMATEAR AUTOMÁTICAMENTE EL CANON (con puntos)
const inputCanon = document.getElementById("canon");

inputCanon.addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, ""); // solo números

    if (valor === "") {
        this.value = "";
        return;
    }

    valor = Number(valor).toLocaleString("es-CO"); // formato colombiano

    this.value = valor;
});


// FUNCIÓN PARA CALCULAR EL SERVICIO
function calcular() {

    let canon = document.getElementById("canon").value.replace(/\./g, "");
    canon = parseFloat(canon);

    let tipo = document.getElementById("tipo").value;
    let resultado = 0;

    if (!canon || canon <= 0) {
        document.getElementById("resultado").innerText = "Ingresa un valor válido";
        return;
    }

    if (tipo === "directo") {
        // 30%
        resultado = canon * 0.30;

    } else {
        // aseguradora / inmobiliaria
        if (canon <= 1000000) {
            resultado = 500000;
        } else {
            let excedente = canon - 1000000;
            resultado = 500000 + (excedente * 0.30);
        }
    }

    // FORMATO EN PESOS COLOMBIANOS
    document.getElementById("resultado").innerText =
        resultado.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP"
        });
}