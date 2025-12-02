class Order {
    constructor(id, producto, descripcion, cantidad, precio, descuento, total) {
        this.id = id;
        this.producto = producto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descuento = descuento;
        this.total = total;
    }
}

module.exports = Order;