//entrada de datos / procesamiento / salida
let SupTecho = 0;
let TechoAlto = 0;
let TechoAncho = 0;
let SupParedes = 0;
let SupAberturas = 0;
let AberAlto = 0;
let AberAncho = 0;
let LitrosNec = 0;
let rendimiento = 0;
let precio = 0;
let descuento = 1;
let PrecioTotal = 0;



//solicito tipo de cliente
let cliente = EsCliente();


//solicito producto
let producto = prompt("Ingrese el tipo de producto que desea(antihumedad, esmalte,  latex, revestimiento, impermeabilizante) ").toLowerCase();
while (producto != "antihumedad" && producto != "esmalte" && producto != "latex" && producto != "revestimiento" && producto != "impermeabilizante") {
    producto = prompt("Ingrese el tipo de producto que desea(antihumedad, esmalte,  latex, revestimiento, impermeabilizante) ").toLowerCase();
}

//calculo superficies
SupTecho = CalcularSupTecho(TechoAlto, TechoAncho);
alert("Superficie techo: " + SupTecho);

SupParedes = CalcularSupParedes();
alert("Superficie paredes :" + SupParedes);

SupAberturas = CalcularSupAberturas();
alert("Superficie aberturas :" + SupAberturas);

//calculo superficie final
let SupFinal = CalcularSupFinal(SupTecho, SupParedes, SupAberturas);

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
LitrosNec = SupFinal / rendimiento;
PrecioTotal = LitrosNec * precio * descuento;

//se muestran valores finales
let ValoresFinales = MostrarValores(SupFinal, rendimiento, precio, LitrosNec, cliente, PrecioTotal);
alert(ValoresFinales);

