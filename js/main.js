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
let ind = 0;

let tiposPro = ["antihumedad", "esmalte",  "latex", "revestimiento", "impermeabilizante"];
class Producto{
    constructor ( tipoProd, rendimientoProd, precioProd){
        this.tipo = tipoProd;
        this.rendimiento = rendimientoProd;
        this.precio = precioProd;
    }
}

const producto1 = new Producto(tiposPro[0], 8, 3500);
const producto2 = new Producto(tiposPro[1], 6, 2350);
const producto3 = new Producto(tiposPro[2], 5, 1000);
const producto4 = new Producto(tiposPro[3], 3, 10000);
const producto5 = new Producto(tiposPro[4], 0.5, 7500);

//solicito tipo de cliente
let cliente = EsCliente();


//solicito producto
let producto = prompt("Ingrese el tipo de producto que desea(antihumedad, esmalte,  latex, revestimiento, impermeabilizante) ").toLowerCase();

while (tiposPro.indexOf(producto)< 0){
    producto = prompt("Ingrese el tipo de producto que desea(antihumedad, esmalte,  latex, revestimiento, impermeabilizante) ").toLowerCase();
}
ind = tiposPro.indexOf(producto);

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
switch (tiposPro[ind]) {
    case producto1.tipo:
        productoElegido = new Producto(producto1.tipo, producto1.rendimiento, producto1.precio);
        break;
    case producto2.tipo:
        productoElegido = new Producto(producto2.tipo, producto2.rendimiento, producto2.precio);
        break;
    case producto3.tipo:
        productoElegido = new Producto(producto3.tipo, producto3.rendimiento, producto3.precio);
        break;
    case producto4.tipo:
        productoElegido = new Producto(producto4.tipo, producto4.rendimiento, producto4.precio);

        break;
    case producto5.tipo:
        productoElegido = new Producto(producto5.tipo, producto5.rendimiento, producto5.precio);
        break;

    default:
        rendimiento = 1;
        precio = 1;
        break;
}


//calculo final de litros necesarios
if (cliente == "SI") descuento = 0.85;
LitrosNec = SupFinal / productoElegido.rendimiento;
PrecioTotal = LitrosNec * productoElegido.precio * descuento;

//se muestran valores finales
let ValoresFinales = MostrarValores(SupFinal, productoElegido.rendimiento, productoElegido.precio, LitrosNec, cliente, PrecioTotal);
alert(ValoresFinales);

