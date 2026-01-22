const { CarritoCompra } = require("../index");

let newCarrito;
let producto;
let arrayProductos;

beforeEach(() => {
  newCarrito = new CarritoCompra();

  producto = { nombre: "Producto 1", precio: 100 };

  arrayProductos = [
    { nombre: "producto 1", precio: 10 },
    { nombre: "producto 2", precio: 20 },
    { nombre: "producto 3", precio: 30 },
    { nombre: "producto 4", precio: 40 },
    { nombre: "producto 5", precio: 50 },
  ];
});

const llenarCarrito = () => {
  arrayProductos.forEach((product) => {
    newCarrito.agregarProducto(product);
  });
};

afterEach(() => {});

describe("class CarritoCompras", () => {
  it("debe existir", () => {
    expect(CarritoCompra).toBeDefined();
    expect(CarritoCompra).toBeInstanceOf(Function);
  });

  it("debe poder crear nuevas instancias", () => {
    expect(newCarrito).toBeInstanceOf(CarritoCompra);
  });

  it("debe tener un método llamado agregarProducto, calcularTotal, aplicarDescuento", () => {
    expect(CarritoCompra.prototype.constructor).toBeDefined();
    expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
    expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
    expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
  });
});

describe("Constructor", () => {
  it("Inicializa el carrito como un array vacío", () => {
    expect(newCarrito.carrito).toEqual([]);
  });
});

describe("agregarProducto", () => {
  it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
    newCarrito.agregarProducto(producto);
    expect(newCarrito.carrito).toEqual([producto]);
  });
});

describe("calcularTotal", () => {
  it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
    llenarCarrito();
    expect(newCarrito.calcularTotal()).toBe(150);
  });
});

describe("aplicarDescuento", () => {
  it("Aplica un descuento al total de la compra segun el porcentaje especificado", () => {
    llenarCarrito();
    expect(newCarrito.aplicarDescuento(0)).toBe(150);
    expect(newCarrito.aplicarDescuento(10)).toBe(135);
    expect(newCarrito.aplicarDescuento(50)).toBe(75);
    expect(newCarrito.aplicarDescuento(100)).toBe(0);
  });
});
