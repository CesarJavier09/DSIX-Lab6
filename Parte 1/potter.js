window.onload = function () {
    let a = document.getElementsByTagName("a").length;
    let padre = document.getElementById("tercero");
    let p_a = padre.getElementsByTagName("a").length;
    alert("El total de enlaces en el documento es: " + a);
    alert("El numero de enlaces en el parrafo No. 3 es: " + p_a);
}

const actualizar = () =>{
    document.getElementById("titulo-principal").innerHTML = "“<a href=\"https://es.wikipedia.org/wiki/Harry_Potter\">HARRY POTTER</a> Y EL MISTERIO DE JAVASCRIPT”";
    let proximo = document.createElement("p");
    let txt_proximo = document.createTextNode("Próximo libro: Compilando las Reliquias de Javascript - Parte I");
    proximo.appendChild(txt_proximo)
    document.getElementsByTagName("div")[0].appendChild(proximo);
    document.getElementsByTagName("button")[0].disabled = true;
}
