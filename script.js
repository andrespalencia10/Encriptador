
function encriptar() {
    var texto = document.getElementById("text").value.toLowerCase();

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("img-candado").style.display = "none";
    document.getElementById("mensaje-1").style.display = "none";
    document.getElementById("mensaje-2").style.display = "none"
    document.getElementById("text-result").innerHTML = txtCifrado;
    document.getElementById("text").innerHTML = " ";
    document.getElementById("btn-copy").style.visibility = "visible";
    document.getElementById("btn-copy").style.display = "inherit";
}


function desencriptar() {
    var texto = document.getElementById("text").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("img-candado").style.display = "none";
    document.getElementById("mensaje-1").style.display = "none";
    document.getElementById("mensaje-2").style.display = "none";
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("text-result").innerHTML = txtCifrado;
    document.getElementById("text").innerHTML = " ";
    document.getElementById("btn-copy").style.display = "inherit";
}



const contenido = document.querySelector("#btn-copy");

contenido.addEventListener("click", () =>
{
    const resultText = document.querySelector("#text-result");
    navigator.clipboard.writeText(resultText.textContent);

    alert("Se copio correctamente!");
}
)



    
    
