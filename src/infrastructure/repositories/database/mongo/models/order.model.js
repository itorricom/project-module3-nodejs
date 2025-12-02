const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    producto: { type: String, required: true },
    descripcion: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    descuento: { type: Number, default: 0 },
    total: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);