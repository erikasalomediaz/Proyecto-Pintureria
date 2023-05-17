//entrada de datos / procesamiento / salida
let suptecho = 0;
let techoalto = 0;
let techoancho = 0;
let supparedes = 0;
let supaberturas = 0;
let aberalto = 0;
let aberancho = 0;
let litrosnec = 0;
let rendimiento = 0;
let precio = 0;
let descuento = 1;
let preciototal = 0;



//solicito tipo de cliente
let cliente = esCliente();


//solicito producto
let producto = prompt("Ingrese el tipo de producto que desea(antihumedad, esmalte,  latex, revestimiento, impermeabilizante) ").toLowerCase();
while (producto != "antihumedad" && producto != "esmalte" && producto != "latex" && producto != "revestimiento" && producto != "impermeabilizante") {
    producto = prompt("Ingrese el tipo de producto que desea(antihumedad, esmalte,  latex, revestimiento, impermeabilizante) ").toLowerCase();
}

//calculo superficies
suptecho = calcularsuptecho(techoalto, techoancho);
alert("Superficie techo: " + suptecho);

supparedes = calcularsupparedes();
alert("Superficie paredes :" + supparedes);

supaberturas = calcularsupaberturas();
alert("Superficie aberturas :" + supaberturas);

//calculo superficie final
let supfinal = calcularsupfinal(suptecho, supparedes, supaberturas);

//agregar switch de rendimiento y precio

switch (producto) {
    case "antihumedad":
        rendimiento = 8;
        precio = 3500;
        break;
    case "esmalte":
        rendimiento = 6;
        precio = 2350;
        break;
    case "latex":
        rendimiento = 5;
        precio = 1000;
        break;
    case "revestimiento":
        rendimiento = 3;
        precio = 10000;

        break;
    case "impermeabilizante":
        rendimiento = 0.5;
        precio = 7500;
        break;

    default:
        rendimiento = 1;
        precio = 1;
        break;
}

//calculo final de litros necesarios
if (cliente == "SI") descuento = 0.85;
litrosnec = supfinal / rendimiento;
preciototal = litrosnec * precio * descuento;

//se muestran valores finales
let valoresfinales = mostrarvalores(supfinal, rendimiento, precio, litrosnec, cliente, preciototal);
alert(valoresfinales);

