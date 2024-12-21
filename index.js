precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = new Intl.NumberFormat().format(precio);

var botonMas = document.querySelector(".mas");
var botonMenos = document.querySelector(".menos");
var valorTotal = document.querySelector(".valor-total");

botonMas.onclick = function () {
  var cantidad = document.querySelector(".cantidad");
  var cantidadAux = Number(cantidad.innerHTML);
  cantidad.innerHTML = cantidadAux + 1;
  let totalAux = (cantidadAux + 1) * precio;
  valorTotal.innerHTML = new Intl.NumberFormat().format(totalAux);
};

botonMenos.onclick = function () {
  var cantidad = document.querySelector(".cantidad");
  var cantidadAux = Number(cantidad.innerHTML);

  if (cantidadAux - 1 < 0) {
    cantidad.innerHTML = 0;
    valorTotal.innerHTML = 0;
  } else {
    cantidad.innerHTML = cantidadAux - 1;
    let totalAux = (cantidadAux - 1) * precio;
    valorTotal.innerHTML = new Intl.NumberFormat().format(totalAux);
  }
};
