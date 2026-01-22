class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    this.carrito.push(producto);
    return "producto agregado con exito";
  }
  calcularTotal() {
    return this.carrito.reduce((acum, product) => {
      return (acum = acum + product.precio);
    }, 0);
  }
  aplicarDescuento(descuento) {
    const precioTotal = this.calcularTotal();
    return precioTotal - (precioTotal * descuento) / 100;
  }
}

module.exports = { CarritoCompra };
