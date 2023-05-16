let cupon = "";
let salir = "";
let contadorCupones = 0;

const obtenerProducto= () =>{

    let entradaProducto = prompt("Ingrese el producto: ");
    while(entradaProducto == ""){
        entradaProducto = prompt("Ingrese el producto (No puede estar vacio): ");
    }
    return entradaProducto;

}

const obtenerPrecio = () =>{
    let entradaPrecio = parseFloat(prompt("Ingrese el precio: "));
    while (isNaN(entradaPrecio)){
        entradaPrecio = parseFloat(prompt("Ingrese el precio (Debe ser un numero): "));
    }
    return entradaPrecio;
}

const canjearCupones = (cantidadDeCupones) =>{
    if (contadorCupones <   cantidadDeCupones){
        if(cantidadDeCupones-contadorCupones > 1){
            cupon = prompt("Tenes " + (cantidadDeCupones-contadorCupones) + " cupones de descuento." + "\n" + "Ingresa 20%OFF para obtener 20% de descuento.");
        }
        else{
            cupon = prompt("Tenes " + (cantidadDeCupones-contadorCupones) +" cupon de descuento." + "\n" + "Ingresa 20%OFF para obtener 20% de descuento.");
        }
        return validarCupon(cantidadDeCupones);

     }
    else{
        alert("No te quedan mas cupones");
        return false;
    }
}

const validarCupon = (cantidadDeCupones) => {
    if(cupon == "20%OFF"){
        contadorCupones++;
        if(cantidadDeCupones-contadorCupones > 1){
            alert("Cupon agregado correctamente, te quedan " + (cantidadDeCupones-contadorCupones) + " cupones");
        }
        else if (cantidadDeCupones-contadorCupones == 1){
            alert("Cupon agregado correctamente, te quedan " + (cantidadDeCupones-contadorCupones) + " cupon");
        }
        else{
            alert("Cupon agregado correctamente, no te quedan mas cupones");
        }
        
        return true;
    }
    else{
        alert("Cupon invalido")
        return false;
    }
}


const aplicarDescuento = (valor) =>{
    return valor*20 / 100;
}

const validarDescuento = (cuponValido, precio, descuento) =>{
    if(cuponValido){
        return "Total a pagar con descuento: $" + (precio-descuento).toFixed(2);
    }
    else{
        return "No obtuviste descuento, el total a pagar es: $" + precio;
    }
}
while(salir != "ESC"){
    let producto = obtenerProducto();
    let precio = obtenerPrecio();
    alert("El producto ingresado es: " + producto + "\n" + "El precio es de: $" +precio);
    let canje = canjearCupones(4);
    let salida = "Producto: " + producto + "\n";
    salida += "Precio: " + precio.toFixed(2) + "\n";
    salida += validarDescuento(canje,precio,aplicarDescuento(precio));
    alert(salida);
    salir = prompt("¿Queres salir?")
}
