const OrderRepository = require('../../../../domain/repositories/order.repository.interface');
const OrderModel = require('./models/order.model');
const Order = require('../../../../domain/entities/order.entity');

class OrderMongoRepository extends OrderRepository {
    async getAll() {
        const orders = await OrderModel.find();
        return orders.map(o => new Order(o._id.toString(), o.producto, o.descripcion, o.cantidad, o.precio, o.descuento, o.total));
    }

    async getById(id) {
        const order = await OrderModel.findById(id);
        if (!order) return null;
        return new Order(order._id.toString(), order.producto, order.descripcion, order.cantidad, order.precio, order.descuento, order.total);
    }

    async create(orderEntity) {
        const newOrder = new OrderModel({
            producto: orderEntity.producto,
            descripcion: orderEntity.descripcion,
            cantidad: orderEntity.cantidad,
            precio: orderEntity.precio,
            descuento: orderEntity.descuento,
            total: orderEntity.total
        });
        const savedOrder = await newOrder.save();
        return new Order(savedOrder._id.toString(), savedOrder.producto, savedOrder.descripcion, savedOrder.cantidad, savedOrder.precio, savedOrder.descuento, savedOrder.total);
    }

    async update(id, orderEntity) {
        const updatedOrder = await OrderModel.findByIdAndUpdate(id, {
            producto: orderEntity.producto,
            descripcion: orderEntity.descripcion,
            cantidad: orderEntity.cantidad,
            precio: orderEntity.precio,
            descuento: orderEntity.descuento,
            total: orderEntity.total
        }, { new: true });

        if (!updatedOrder) return null;
        return new Order(updatedOrder._id.toString(), updatedOrder.producto, updatedOrder.descripcion, updatedOrder.cantidad, updatedOrder.precio, updatedOrder.descuento, updatedOrder.total);
    }

    async delete(id) {
        await OrderModel.findByIdAndDelete(id);
    }
}

module.exports = OrderMongoRepository;