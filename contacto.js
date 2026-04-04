// FORMATEAR CANON
const inputCanon = document.getElementById("canon");
const tipoServicio = document.getElementById("tipo");

inputCanon.addEventListener("input", actualizar);
tipoServicio.addEventListener("change", actualizar);

function actualizar() {
    // FORMATEO
    let valor = inputCanon.value.replace(/\D/g, "");

    if (valor === "") {
        inputCanon.value = "";
        document.getElementById("resultado").innerText = "$0";
        return;
    }

    inputCanon.value = Number(valor).toLocaleString("es-CO");

    calcular();
}


// FUNCIÓN CALCULAR (la tuya adaptada)
function calcular() {

    let canon = inputCanon.value.replace(/\./g, "");
    canon = parseFloat(canon);

    let tipo = tipoServicio.value;
    let resultado = 0;

    if (!canon || canon <= 0) {
        document.getElementById("resultado").innerText = "Ingresa un valor válido";
        return;
    }

    if (tipo === "directo") {
        resultado = canon * 0.30;
    } else {
        if (canon <= 1000000) {
            resultado = 500000;
        } else {
            let excedente = canon - 1000000;
            resultado = 500000 + (excedente * 0.30);
        }
    }

    document.getElementById("resultado").innerText =
        resultado.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP"
        });
}
// _________________WSP________________________________________

function enviarWhatsApp() {

    let nombre = document.querySelector('input[placeholder="Tu nombre"]').value;
    let correo = document.querySelector('input[type="email"]').value;
    let telefono = document.querySelector('input[placeholder="300 123 4567"]').value;
    let canon = document.getElementById("canon").value;
    let tipo = document.getElementById("tipo").value;

    let tipoTexto = tipo === "directo"
        ? "arriendo directo"
        : "aseguradora / inmobiliaria";

    let mensaje = `Hola, mi nombre es ${nombre}, mi correo es ${correo} y mi celular es ${telefono}. 
Voy a pagar un canon de $${canon} y es un ${tipoTexto}.`;

    let url = `https://wa.me/573208855930?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}