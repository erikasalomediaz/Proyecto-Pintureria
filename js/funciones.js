
//solicito tipo de cliente
const esCliente = () => {

    let cliente = prompt("Para iniciar el Simulador de pintura ingrese 'SI' si es cliente, 'No' si no lo es").toUpperCase();
    while (cliente != "SI" && cliente != "NO") {
        cliente = prompt("Ingrese 'SI' si es cliente, 'No' si no lo es").toUpperCase();
    }
    if (cliente == "SI") {
        alert("¡Posee un descuento del 15% por ser cliente!");
    } else {
        alert("Sin descuentos disponibles.");
    }

    return cliente;
}

//calculo superficie techo
const calcularsuptecho = (techoalto, techoancho) => {
    while (techoalto <= 0 || techoalto == "" || isNaN(techoalto)) {
        techoalto = parseFloat(prompt("Ingrese el alto del techo en metros"));
    }
    while (techoancho <= 0 || techoancho == "" || isNaN(techoancho)) {
        techoancho = parseFloat(prompt("Ingrese el ancho del techo en metros"));
    }
    return suptecho = techoalto * techoancho;
};

//calculo superficie paredes
const calcularsupparedes = () => {
    let cantparedes = 0;
    while (cantparedes <= 0 || cantparedes == "" || isNaN(cantparedes)) {
        cantparedes = parseInt(prompt("Ingrese la cantidad de paredes"));
    }
    for (var i = 1; i <= cantparedes; i++) {
        let paredalto = 0;
        let paredancho = 0;
        while (paredalto <= 0 || paredalto == "" || isNaN(paredalto)) {
            paredalto = parseFloat(prompt("Ingrese el alto del pared " + i + " en metros"));
        }
        while (paredancho <= 0 || paredancho == "" || isNaN(paredancho)) {
            paredancho = parseFloat(prompt("Ingrese el ancho del pared " + i + " en metros"));
        }
        supparedes += (paredalto * paredancho);
    }

    return supparedes;
}

//calculo superficie aberturas
const calcularsupaberturas = () => {
    let cantaberturas = 0;
    while (cantaberturas <= 0 || cantaberturas == "" || isNaN(cantaberturas)) {
        cantaberturas = parseInt(prompt("Ingrese la cantidad de aberturas"));
    }
    for (var i = 1; i <= cantaberturas; i++) {
        let aberalto = 0;
        let aberancho = 0;
        while (aberalto <= 0 || aberalto == "" || isNaN(aberalto)) {
            aberalto = parseFloat(prompt("Ingrese el alto de la abertura " + i + " en metros"));
        }
        while (aberancho <= 0 || aberancho == "" || isNaN(aberancho)) {
            aberancho = parseFloat(prompt("Ingrese el ancho de la abertura " + i + " en metros"));
        }
        supaberturas += (aberalto * aberancho);
    }
    return supaberturas;
}

const calcularsupfinal = (suptecho, supparedes, supaberturas) => {
    supfinal1 = suptecho + supparedes - supaberturas;
    return supfinal1;
}


//mostrar valores finales
mostrarvalores=(supfinal, rendimiento, precio, litrosnec, cliente, preciototal) =>{
    let valoresfinales = "Superficie total a pintar: " + supfinal + "\n";
valoresfinales += "Rendimiento del producto: " + rendimiento +"lts. por m2 " + "\n";
valoresfinales += "Precio por litro: " + precio + "\n";
valoresfinales += "Litros necesarios: " + litrosnec + "\n";
if (cliente == "SI"){
    valoresfinales += "Precio total con descuento del 15% por ser cliente: " + preciototal + "\n";}
    else{
valoresfinales += "Precio total: " + preciototal + "\n";}
 return valoresfinales;
}